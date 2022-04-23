// Yes I literally botched a swipe API for this
const MobileSwipeAPI = {
	SwipeDirection: {
		NONE:	0,
		LEFT:	1,
		RIGHT:	2,
		UP:		3,
		DOWN:	4,
	},
	gesture: {
		x: [],
		y: [],
		match: MobileSwipeAPI.SwipeDirection.NONE,
	},
	Setup: function (callback, tolerance = 100) {
		window.addEventListener('touchstart', function(e) {
			e.preventDefault();
			for (i = 0; i < e.touches.length; i++) {
				MobileSwipeAPI.gesture.x.push(e.touches[i].clientX);
				MobileSwipeAPI.gesture.y.push(e.touches[i].clientY);
			}
		});
		
		window.addEventListener('touchmove', function(e) {
			e.preventDefault()
			for (var i = 0; i < e.touches.length; i++) {
				MobileSwipeAPI.gesture.x.push(e.touches[i].clientX);
				MobileSwipeAPI.gesture.y.push(e.touches[i].clientY);
			}
		});
		
		window.addEventListener('touchend', function(e) {
			const xTravel = MobileSwipeAPI.gesture.x[MobileSwipeAPI.gesture.x.length - 1] - MobileSwipeAPI.gesture.x[0];
			const yTravel = MobileSwipeAPI.gesture.y[MobileSwipeAPI.gesture.y.length - 1] - MobileSwipeAPI.gesture.y[0];
			
			if (xTravel < tolerance && xTravel > -tolerance && yTravel < -tolerance) {
				MobileSwipeAPI.gesture.match = SwipeDirection.UP;
			} else
			if (xTravel < tolerance && xTravel > -tolerance && yTravel > tolerance) {
				MobileSwipeAPI.gesture.match = SwipeDirection.DOWN;
			} else
			if (yTravel < tolerance && yTravel > -tolerance && xTravel < -tolerance) {
				MobileSwipeAPI.gesture.match = SwipeDirection.LEFT;
			} else
			if (yTravel < tolerance && yTravel > -tolerance && xTravel > tolerance) {
				MobileSwipeAPI.gesture.match = SwipeDirection.RIGHT;
			} else {
				MobileSwipeAPI.gesture.match = SwipeDirection.NONE;
			}

			callback(gesture);
		
			// MobileSwipeAPI.gesture.x = [];
			// MobileSwipeAPI.gesture.y = [];
			// MobileSwipeAPI.gesture.match = SwipeDirection.NONE;
		});
	}
};

window.MobileSwipeAPI = MobileSwipeAPI;

// TODO: swipe right => open sidebar mobile