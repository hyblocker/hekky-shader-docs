function ComparisionControlClick (e) {

    // Early quit if we aren't holding any buttons
    if ( e.buttons === 0 && e.type === 'mousemove' ) return false;

    // Fetch comparision card ; up to 5 parents
    let element = e.target;
    for ( let i = 0; i < 5; i++ ) {
        if ( !element.classList.contains( 'comparision-card' )) {
            element = element.parentNode;
        } else break;
    }
    // Calculate new width
    const newWidth = e.layerX;
    element.setAttribute( 'style', `--compare-width: ${newWidth}px` );

    // Fuck dragging
    return false;
}

const waitForGlobal = function( key, callback ) {
    if ( window[key] ) {
        callback ();
    } else {
        setTimeout( function () {
            waitForGlobal( key, callback );
        }, 100 );
    }
};

let fuse = null;
let documentLoaded = false;

let SearchRefs = {};

function createSearchResult( searchItem ) {

	const element = document.createElement( 'li' );
	element.classList.add( 'search-result' );

    const a = document.createElement( 'a' );
    const linkText = document.createTextNode( searchItem.item.title );
    a.appendChild( linkText );
    a.title = searchItem.item.title;
    a.href = `/${searchItem.item.path}`;
    element.appendChild( a );

    element.appendChild( a );

	return element;
}

function openSearch () {
	const canSearch = documentLoaded && fuse != null;
	if ( !canSearch )
		return;

    // Toggle container visiblity
    if (SearchRefs.searchContainer.classList.contains( 'visible' )) {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    } else {
        SearchRefs.searchContainer.classList.add( 'visible' );
        SearchRefs.searchTextbox.focus ();
    }

    doSearch ();
}

function doSearch () {
	const canSearch = documentLoaded && fuse != null;
	if ( !canSearch )
		return;

    const searchString = SearchRefs.searchTextbox.value
        .replace ( /[.,\/#!?@\+$%\^&\*;:{}="\-_`~()\\]/g, " " )    // Filter out punctuation
        .replaceAll ( /\s{2,}/g, ' ' ).replaceAll( '\n', ' ' )     // Filter out whitespace
        .trim ().toLowerCase ();                                   // Clean string

    if ( searchString.length > 0 ) {
        SearchRefs.searchInputContainer.classList.add( 'has-value' );
    } else {
        SearchRefs.searchInputContainer.classList.remove( 'has-value' );
    }

    const result = fuse.search( searchString );

    const uniqueResults = new Map(result.map(obj => [obj.item.path, obj]));
    const uniqueResultsArr = [...uniqueResults.values()];

    SearchRefs.searchResultsContainer.innerHTML = '';

    uniqueResultsArr.sort( function( a, b ) { 
        return a.score - b.score;
    });

    uniqueResultsArr.forEach( (item) => {
        const itemToAdd = createSearchResult( item );
        SearchRefs.searchResultsContainer.appendChild( itemToAdd );
    });
}

document.addEventListener( "DOMContentLoaded", ( () => {
	// Try yeeting noJS flag
	document.documentElement.classList.remove( 'no-js' );

    // Search
	// Fetch references
	SearchRefs = {
		searchButton:           document.querySelector( 'header button.search' ),
		searchContainer:        document.querySelector( '.search-container-root' ),
		searchResultsContainer: document.querySelector( '.search-container-root .search-results-container' ),
		searchInputContainer:   document.querySelector( '.search-container-root .search-input' ),
		searchTextbox:          document.querySelector( '.search-container-root .search-input .search-input-textbox' ),
		searchClear:            document.querySelector( '.search-container-root .search-input #close' ),
	};

    // Search button on header => open search popup
	SearchRefs.searchButton.onclick = openSearch;
    // Clicking on bg => hide popup
	SearchRefs.searchContainer.onclick = ( () => {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    });
    // Click on search div => focus on textbox
    SearchRefs.searchInputContainer.onclick = ( () => {
        SearchRefs.searchTextbox.focus ();
    });
    // Clear results
    SearchRefs.searchClear.onclick = ( (e) => {
        // Stop propagating
        if ( e.stopPropagation ) {
            e.stopPropagation ();
        } else {
            e.cancelBubble = true;
        }
        SearchRefs.searchTextbox.value = '';
        doSearch ();
    });
    // Textbox input event
    SearchRefs.searchTextbox.oninput = doSearch;
    // Disable clicking on the popup hiding the popout
    document.querySelector( '.search-container-root .search-container' ).onclick = ( (e) => {
        if ( e.stopPropagation ) {
            e.stopPropagation ();
        } else {
            e.cancelBubble = true;
        }
    });

	documentLoaded = true;

    // Comparision Control
    document.querySelectorAll( '.comparision-card' ).forEach( (comparisionControl) => {
        comparisionControl.onmousemove = ComparisionControlClick;
        comparisionControl.onmouseup = ComparisionControlClick;
    });

    const docsSidebar = document.querySelector( '.docs-sidebar' );
    const sidebarOverlay = document.querySelector( '.sidebar-overlay' );

    // Mobile hamburger
    document.querySelector( '.mobile.sidebar' ).onclick = ( (e) => {
        if (docsSidebar.classList.contains( "expand" )) {
            docsSidebar.classList.remove( "expand" );
            docsSidebar.classList.add( "collapse" );
        } else {
            docsSidebar.classList.add( "expand" );
            docsSidebar.classList.remove( "collapse" );
        }
    });

    // Theme toggler
    // Load theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    switch (storedTheme) {
        case 'light':
            document.documentElement.classList.add( "light" );
            break;
        case 'dark':
            document.documentElement.classList.add( "dark" );
            break;
    }

    // Theme toggler button
    document.querySelector( '.theme-toggle' ).onclick = ( (e) => {
        if (document.documentElement.classList.contains( "light" )) {
            document.documentElement.classList.remove( "light" );
            document.documentElement.classList.add( "dark" );
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add( "light" );
            document.documentElement.classList.remove( "dark" );
            localStorage.setItem('theme', 'light');
        }
    });

    sidebarOverlay.onclick = ( (e) => {
        docsSidebar.classList.remove( "expand" );
        docsSidebar.classList.add( "collapse" );
    });
}));

document.onkeyup = ( (e) => {
    if ( e.key === "Escape" ) {
        SearchRefs.searchContainer.classList.remove( 'visible' );
    }
});

async function getJSON( jsonURL ) {
    return fetch( jsonURL )
        .then( (response) => response.json() )
        .then( (responseJson) => { return responseJson } );
}

waitForGlobal( "Fuse", async function () {
    // Fuse loaded!
    let searchEntries = await getJSON( '/shared/search-entries.json' );

    const options = {
        includeScore: true,
        useExtendedSearch: true,
        shouldSort: true,
        ignoreLocation: true,
        keys: [{
            name: 'title',
            weight: 0.3
        }, {
            name: 'plaintext',
            weight: 0.6
        }, {
            name: 'path',
            weight: 0.1
        }]
    };

    const searchIndex = Fuse.createIndex( options.keys, searchEntries.entries );
    fuse = new Fuse( searchEntries.entries, options, searchIndex );
});

waitForGlobal( "MobileSwipeAPI", async function () {    
    let docsSidebar = document.querySelector( '.docs-sidebar' );

    MobileSwipeAPI.Setup( (gesture) => {
        if (docsSidebar === null )
            docsSidebar = document.querySelector( '.docs-sidebar' );

        if ( docsSidebar.classList.contains( "expand" )
        && gesture.swipeDirection ===  MobileSwipeAPI.SwipeDirection.LEFT ) {
            docsSidebar.classList.remove( "expand" );
            docsSidebar.classList.add( "collapse" );
        } else if ( gesture.swipeDirection ===  MobileSwipeAPI.SwipeDirection.RIGHT ) {
            docsSidebar.classList.add( "expand" );
            docsSidebar.classList.remove( "collapse" );
        }
    });
});

waitForGlobal( "Filament", async function () {
waitForGlobal( "Trackball", async function () {

    console.log("Initializing Filament");

    const albedo_suffix = Filament.getSupportedFormatSuffix('astc s3tc_srgb');
    const texture_suffix = Filament.getSupportedFormatSuffix('etc');

    const filamentAssetsRoot = `/shared/webgl-assets/`;

    const environ = 'neon_photostudio_2k'
    const ibl_url = `${filamentAssetsRoot}${environ}/${environ}_ibl.ktx`;
    const sky_small_url = `${filamentAssetsRoot}${environ}/${environ}_skybox_tiny.ktx`;
    const sky_large_url = `${filamentAssetsRoot}${environ}/${environ}_skybox.ktx`;
    const albedo_url = `${filamentAssetsRoot}albedo${albedo_suffix}.ktx`;
    const ao_url = `${filamentAssetsRoot}ao${texture_suffix}.ktx`;
    const metallic_url = `${filamentAssetsRoot}metallic${texture_suffix}.ktx`;
    const normal_url = `${filamentAssetsRoot}normal${texture_suffix}.ktx`;
    const roughness_url = `${filamentAssetsRoot}roughness${texture_suffix}.ktx`;
    const filamesh_url = `${filamentAssetsRoot}shaderball.filamesh`;

    window.filamentApps = {};
    const filamentRenderers = document.getElementsByClassName('filament-renderer');

    for (let i = 0; i < filamentRenderers.length; i++) {
        const canvas = filamentRenderers[i].getElementsByTagName("canvas")[0];
        const identifier = canvas.id;
        const canvasMaterial = canvas.getAttribute("data-filamat");
        const sliders = document.querySelectorAll(`input[type="range"][data-type*="filament"][data-affects="${identifier}"]`);
        const filamat_url = `${filamentAssetsRoot}${canvasMaterial ?? "textured"}.filamat`;
    
        Filament.init([ filamat_url, filamesh_url, sky_small_url, ibl_url ], () => {
            window.filamentApps[identifier] = new App(canvas, sliders, filamat_url);
        });
    }

    class App {
        constructor(canvas, sliders, filamat_url) {
            this.canvas = canvas;
            this.sliders = sliders;
            this.engine = Filament.Engine.create(canvas);
            this.scene = this.engine.createScene();

            const material = this.engine.createMaterial(filamat_url);
            this.matinstance = material.createInstance();

            const filamesh = this.engine.loadFilamesh(filamesh_url, this.matinstance);
            this.shaderball = filamesh.renderable;

            this.skybox = this.engine.createSkyFromKtx1(sky_small_url);
            this.scene.setSkybox(this.skybox);
            this.indirectLight = this.engine.createIblFromKtx1(ibl_url);
            this.indirectLight.setIntensity(100000);
            this.scene.setIndirectLight(this.indirectLight);

            this.trackballInitial = new Trackball(canvas, {startSpin: 0.0005, friction:0.0004, autoTick: false});
            this.trackball = new Trackball(canvas, {startSpin: 0, autoTick: false});

            const handler = this.speen.bind(this);
            canvas.addEventListener('wheel', handler);
            canvas.addEventListener('pointermove', handler);
            canvas.addEventListener('pointerdown', handler);
            canvas.addEventListener('pointerup', handler);

            // idle spin
            this.trackballIsFree = false;

            Filament.fetch([sky_large_url, albedo_url, roughness_url, metallic_url, normal_url, ao_url], () => {
                const albedo = this.engine.createTextureFromKtx1(albedo_url, {
                    srgb: true
                });
                const roughness = this.engine.createTextureFromKtx1(roughness_url);
                const metallic = this.engine.createTextureFromKtx1(metallic_url);
                const normal = this.engine.createTextureFromKtx1(normal_url);
                const ao = this.engine.createTextureFromKtx1(ao_url);
                const sampler = new Filament.TextureSampler(Filament.MinFilter.LINEAR_MIPMAP_LINEAR,
                    Filament.MagFilter.LINEAR, Filament.WrapMode.CLAMP_TO_EDGE);
                this.matinstance.setTextureParameter('albedo', albedo, sampler);
                this.matinstance.setTextureParameter('roughness', roughness, sampler);
                this.matinstance.setTextureParameter('metallic', metallic, sampler);
                this.matinstance.setTextureParameter('normal', normal, sampler);
                this.matinstance.setTextureParameter('ao', ao, sampler);
                this.matinstance.setFloatParameter('clearCoat', 0.0);
                // Replace low-res skybox with high-res skybox.
                this.engine.destroySkybox(this.skybox);
                this.skybox = this.engine.createSkyFromKtx1(sky_large_url);
                this.scene.setSkybox(this.skybox);
                this.scene.addEntity(this.shaderball);
            });

            this.swapChain = this.engine.createSwapChain();
            this.renderer = this.engine.createRenderer();
            this.camera = this.engine.createCamera(Filament.EntityManager.get().create());
            this.view = this.engine.createView();
            this.view.setCamera(this.camera);
            this.view.setScene(this.scene);
            this.render = this.render.bind(this);
            this.resize = this.resize.bind(this);
            window.addEventListener('resize', this.resize);
            
            let roughnessOverride = true;
            let metallicOverride = true;

            this.sliderChange = this.sliderChange.bind(this);
            for (let i = 0; i < this.sliders.length; i++) {
                this.sliders[i].addEventListener("input", this.sliderChange);
                this.sliders[i].addEventListener("change", this.sliderChange);
                
                const floatValue = (this.sliders[i].value - this.sliders[i].min) / this.sliders[i].max;
                const attributeProp = this.sliders[i].getAttribute("data-type");

                switch (attributeProp) {
                    case "filament-metallic":
                        this.matinstance.setFloatParameter('metalMultiplier', floatValue);
                        metallicOverride = false;
                        break;
                    case "filament-roughness":
                        this.matinstance.setFloatParameter('roughMultiplier', floatValue);
                        roughnessOverride = false;
                        break;
                }
            }
            
            // Default metal / rough params
            if (roughnessOverride)
                this.matinstance.setFloatParameter('roughMultiplier', 1.0);
            if (metallicOverride)
                this.matinstance.setFloatParameter('metalMultiplier', 1.0);

            const eye = [0, 1, 4], center = [0, 0.5, 0], up = [0, 1, 0];
            this.camera.lookAt(eye, center, up);

            this.resize();
            window.requestAnimationFrame(this.render);
        }

        render() {
            const tcm = this.engine.getTransformManager();
            const inst = tcm.getInstance(this.shaderball);
            const currTrackball = this.trackballIsFree === true ? this.trackball : this.trackballInitial;
            this.trackball.tick();
            this.trackballInitial.tick();
            tcm.setTransform(inst, currTrackball.getMatrix());
            inst.delete();

            this.renderer.render(this.swapChain, this.view);
            window.requestAnimationFrame(this.render);
        }

        resize() {
            const dpr = window.devicePixelRatio;
            const width = this.canvas.width = window.innerWidth * dpr;
            const height = this.canvas.height = window.innerHeight * dpr;
            this.view.setViewport([0, 0, width, height]);

            const aspect = width / height;
            const Fov = Filament.Camera$Fov, fov = aspect < 1 ? Fov.HORIZONTAL : Fov.VERTICAL;
            this.camera.setProjectionFov(45, aspect, 1.0, 10.0, fov);
        }

        speen(evt) {
            if (this.trackballIsFree === true || (evt.pointerType === 'touch' && !evt.isPrimary)) {
                return;
            }
            if (evt.type === 'pointerdown' || evt.type === 'pointerup' || (evt.type === 'pointermove' && evt.buttons)) {
                this.trackballIsFree = true;
                this.trackball.currentTilt = this.trackballInitial.currentTilt;
                this.trackball.currentSpin = this.trackballInitial.currentSpin;
                this.trackball.currentState = this.trackballInitial.currentState;
                this.trackball.idle = this.trackballInitial.idle;
                this.trackball.initialInertia = this.trackballInitial.initialInertia;
                this.trackball.inertiaSpeed = this.trackballInitial.inertiaSpeed;
                this.trackball.currentPosition = this.trackballInitial.currentPosition;
                this.trackball.previousPosition = this.trackballInitial.previousPosition;
                this.trackball.previous2Position = this.trackballInitial.previous2Position;
                this.trackball.previousTime = this.trackballInitial.previousTime;
            }
        }

        sliderChange(slider) {
            const sliderElement = slider.srcElement;
            const floatValue = (sliderElement.value - sliderElement.min) / sliderElement.max;
            const attributeProp = sliderElement.getAttribute("data-type");

            switch (attributeProp) {
                case "filament-metallic":
                    this.matinstance.setFloatParameter('metalMultiplier', floatValue);
                    break;
                case "filament-roughness":
                    this.matinstance.setFloatParameter('roughMultiplier', floatValue);
                    break;
            }
        }
    }
})});
