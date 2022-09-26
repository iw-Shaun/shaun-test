var Matter = require('matter-js');
(function ($) {
    var methods = {
        init: function (options) {
			// please dont look at this hot mess
			sW = 400;
			sH = 400;
			var flag = false;

			var Engine = Matter.Engine,
				Composites = Matter.Composites,
				Events = Matter.Events,
				World = Matter.World,
				Common = Matter.Common,
				Composite = Matter.Composite,
				Render = Matter.Render,
				Body = Matter.Body,
				Bodies = Matter.Bodies;
			var engine = Engine.create(options.clock);
			var render = Render.create({
				element: options.clock[0],
				engine: engine,
				options: {
					width: sW,
					height: sH,
					wireframes: false,
					showAngleIndicator: false,
					showCollisions: false,
					showVelocity: false
				}
			});	
			Render.run(render);

			shapeAmount = 4;
			shapeSize = sW/10;
			m = Math.min(sW, sH);
			rat = 1 / 4.5 * 2;
			r = m * rat;	

			var stack = Composites.stack(sW/5,sH/1.5 - (shapeAmount * shapeSize), shapeAmount,2, 0, 0, function(x, y) {
				return Bodies.circle(x, y, shapeSize, {
					restitution: .5,
					render: {
						strokeStyle: 'white',
						lineWidth:0,
						sprite: {
							texture: `${window.assetUrl(`/images/gashapon/egg.png`)}`,
							xScale: 1,
							yScale: 1
						}
					}
				});
			});
			World.add(engine.world, stack);

			engine.world.gravity.x = 0;
			engine.world.gravity.y = 3;
			render.options.background = 'rgba(0,0,0,0)';

			parts = [];	
			pegCount = 16;
			TAU = Math.PI * 2;
			for(i = 0; i < pegCount; i++) {
				segment = TAU / pegCount;
				angle2 = i / pegCount * TAU + segment / 2;
				x2 = Math.cos(angle2);
				y2 = Math.sin(angle2);
				cx2 = x2 * r + sW/2;
				cy2 = y2 * r + sH/2;
				rect = addRect({ x: cx2, y: cy2, w: 10 / 1000 * m, h: 400 / 1000 * m, options: { angle: angle2, isStatic: true, density: 1, render:{
					fillStyle: 'rgba(0,0,0,.2)',
					strokeStyle: 'rgba(0,0,0,0)',
					lineWidth: 0 
				}  } });
				parts.push(rect);
			}
			rect = addRect({ x: sW/2, y: sH-50, w: sW*2 / 1000 * m, h: 10 / 1000 * m, options: { angle: 0, isStatic: true, density: 1, render:{
				fillStyle: 'rgba(0,0,0,.8)',
				strokeStyle: 'rgba(0,0,0,0)',
				lineWidth: 0 
			}  } });
			parts.push(rect);

			function addBody(...bodies) {
				World.add(engine.world, ...bodies);
			}

			function addRect({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) {
				body = Bodies.rectangle(x, y, w, h, options);
				addBody(body);
				return body;
			}

			Engine.run(engine);
			var explosion = function(engine) {
				var bodies = Composite.allBodies(engine.world);

				for (var i = 0; i < bodies.length; i++) {
					var body = bodies[i];

					if (!body.isStatic && body.position.y >= (sW/3+r)*0.92) {
						var forceMagnitude = 0.12 * body.mass;

						Body.applyForce(body, body.position, {
							x: -forceMagnitude, 
							y: -forceMagnitude*2
						});
					}
				}
			};

			var timeScaleTarget = 1,
				counter = 0;


			Events.on(engine, 'afterUpdate', function(event) {
				// tween the timescale for bullet time slow-mo
				engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

				counter += 1;

				// every 1.5 sec
				if (counter >= 1) {

					// flip the timescale
					if (timeScaleTarget < 1) {
						timeScaleTarget = 1;
					} else {
						timeScaleTarget = 0.05;
					}

					// create some random forces
					flag && explosion(engine);

					// reset counter
					counter = 0;
				}
			});
			
			function draw() {
				requestAnimationFrame(draw);
			}

			draw();

			options.btn.click(() => {
				flag = !flag
				options.btn.hide();
				setTimeout(() => {
					flag = !flag
					options.egg.addClass('rotate-center');
				}, 2000);
			})
        },
    };

    $.fn.eraser = function (method) {
		methods.init.apply(this, arguments);
    };
})(jQuery);



