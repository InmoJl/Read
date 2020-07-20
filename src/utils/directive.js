import Vue from 'vue'

// 点击水波
Vue.directive('blister', {
	inserted(el) {
		
		// 逐个设置防止样式覆盖
		el.style.position = 'relative'
		el.style.overflow = 'hidden'
		
		el.onclick = function(e) {
			const span = document.createElement('span')
			
			span.style.cssText = `
				width: 0;
				height: 0;
				position: absolute;
				top: ${e.layerY}px;
				left: ${e.layerX}px;
				background-color: #008DFA;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				pointer-events: none;
				animation: blister 1s;
			`
			
			el.appendChild(span)
			
			setTimeout(() => span.remove(), 1000)
		}
	}
})
