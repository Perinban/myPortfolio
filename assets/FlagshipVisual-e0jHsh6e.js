import{r as p,j as o}from"./index-D0DWpU4_.js";import{I as fe,F as J,a as F,b as B,W as ue,B as k,S as se,V as E,c as pe,U as K,d as Q,e as oe,f as he,g as O,L as me,M as ve,h as ge,i as ye,j as xe,_ as Y,C as Se,u as R}from"./extends-Clu4NFWJ.js";import{v as re}from"./constants-C1PXj9GH.js";const ae=re>=125?"uv1":"uv2",Z=new k,I=new E;class $ extends fe{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new J(e,3)),this.setAttribute("uv",new J(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new F(t,6,1);return this.setAttribute("instanceStart",new B(i,3,0)),this.setAttribute("instanceEnd",new B(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new F(i,t*2,1);return this.setAttribute("instanceColorStart",new B(n,t,0)),this.setAttribute("instanceColorEnd",new B(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ue(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new k);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Z.setFromBufferAttribute(t),this.boundingBox.union(Z))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new se),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let s=0,l=e.count;s<l;s++)I.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(I)),I.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(I));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class ce extends ${constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];else for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5],n[2*s+6]=e[s+6],n[2*s+7]=e[s+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class X extends pe{constructor(e){super({type:"LineMaterial",uniforms:K.clone(K.merge([Q.common,Q.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${re>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const H=new O,ee=new E,te=new E,d=new O,f=new O,w=new O,W=new E,N=new ve,u=new me,ne=new E,P=new k,T=new se,b=new O;let _,M;function ie(r,e,t){return b.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),b.multiplyScalar(1/b.w),b.x=M/t.width,b.y=M/t.height,b.applyMatrix4(r.projectionMatrixInverse),b.multiplyScalar(1/b.w),Math.abs(Math.max(b.x,b.y))}function we(r,e){const t=r.matrixWorld,i=r.geometry,n=i.attributes.instanceStart,s=i.attributes.instanceEnd,l=Math.min(i.instanceCount,n.count);for(let a=0,m=l;a<m;a++){u.start.fromBufferAttribute(n,a),u.end.fromBufferAttribute(s,a),u.applyMatrix4(t);const y=new E,g=new E;_.distanceSqToSegment(u.start,u.end,g,y),g.distanceTo(y)<M*.5&&e.push({point:g,pointOnLine:y,distance:_.origin.distanceTo(g),object:r,face:null,faceIndex:a,uv:null,[ae]:null})}}function be(r,e,t){const i=e.projectionMatrix,s=r.material.resolution,l=r.matrixWorld,a=r.geometry,m=a.attributes.instanceStart,y=a.attributes.instanceEnd,g=Math.min(a.instanceCount,m.count),h=-e.near;_.at(1,w),w.w=1,w.applyMatrix4(e.matrixWorldInverse),w.applyMatrix4(i),w.multiplyScalar(1/w.w),w.x*=s.x/2,w.y*=s.y/2,w.z=0,W.copy(w),N.multiplyMatrices(e.matrixWorldInverse,l);for(let S=0,C=g;S<C;S++){if(d.fromBufferAttribute(m,S),f.fromBufferAttribute(y,S),d.w=1,f.w=1,d.applyMatrix4(N),f.applyMatrix4(N),d.z>h&&f.z>h)continue;if(d.z>h){const c=d.z-f.z,v=(d.z-h)/c;d.lerp(f,v)}else if(f.z>h){const c=f.z-d.z,v=(f.z-h)/c;f.lerp(d,v)}d.applyMatrix4(i),f.applyMatrix4(i),d.multiplyScalar(1/d.w),f.multiplyScalar(1/f.w),d.x*=s.x/2,d.y*=s.y/2,f.x*=s.x/2,f.y*=s.y/2,u.start.copy(d),u.start.z=0,u.end.copy(f),u.end.z=0;const j=u.closestPointToPointParameter(W,!0);u.at(j,ne);const U=ge.lerp(d.z,f.z,j),A=U>=-1&&U<=1,G=W.distanceTo(ne)<M*.5;if(A&&G){u.start.fromBufferAttribute(m,S),u.end.fromBufferAttribute(y,S),u.start.applyMatrix4(l),u.end.applyMatrix4(l);const c=new E,v=new E;_.distanceSqToSegment(u.start,u.end,v,c),t.push({point:v,pointOnLine:c,distance:_.origin.distanceTo(v),object:r,face:null,faceIndex:S,uv:null,[ae]:null})}}}class le extends he{constructor(e=new $,t=new X({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let l=0,a=0,m=t.count;l<m;l++,a+=2)ee.fromBufferAttribute(t,l),te.fromBufferAttribute(i,l),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ee.distanceTo(te);const s=new F(n,2,1);return e.setAttribute("instanceDistanceStart",new B(s,1,0)),e.setAttribute("instanceDistanceEnd",new B(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_=e.ray;const l=this.matrixWorld,a=this.geometry,m=this.material;M=m.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),T.copy(a.boundingSphere).applyMatrix4(l);let y;if(i)y=M*.5;else{const h=Math.max(n.near,T.distanceToPoint(_.origin));y=ie(n,h,m.resolution)}if(T.radius+=y,_.intersectsSphere(T)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),P.copy(a.boundingBox).applyMatrix4(l);let g;if(i)g=M*.5;else{const h=Math.max(n.near,P.distanceToPoint(_.origin));g=ie(n,h,m.resolution)}P.expandByScalar(g),_.intersectsBox(P)!==!1&&(i?we(this,t):be(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(H),this.material.uniforms.resolution.value.set(H.z,H.w))}}class _e extends le{constructor(e=new ce,t=new X({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const de=p.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:s,segments:l,dashed:a,...m},y){var g,h;const S=ye(A=>A.size),C=p.useMemo(()=>l?new le:new _e,[l]),[L]=p.useState(()=>new X),j=(i==null||(g=i[0])==null?void 0:g.length)===4?4:3,U=p.useMemo(()=>{const A=l?new $:new ce,G=e.map(c=>{const v=Array.isArray(c);return c instanceof E||c instanceof O?[c.x,c.y,c.z]:c instanceof oe?[c.x,c.y,0]:v&&c.length===3?[c[0],c[1],c[2]]:v&&c.length===2?[c[0],c[1],0]:c});if(A.setPositions(G.flat()),i){t=16777215;const c=i.map(v=>v instanceof xe?v.toArray():v);A.setColors(c.flat(),j)}return A},[e,l,i,j]);return p.useLayoutEffect(()=>{C.computeLineDistances()},[e,C]),p.useLayoutEffect(()=>{a?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[a,L]),p.useEffect(()=>()=>{U.dispose(),L.dispose()},[U]),p.createElement("primitive",Y({object:C,ref:y},m),p.createElement("primitive",{object:U,attach:"geometry"}),p.createElement("primitive",Y({object:L,attach:"material",color:t,vertexColors:!!i,resolution:[S.width,S.height],linewidth:(h=n??s)!==null&&h!==void 0?h:1,dashed:a,transparent:j===4},m)))}),z="#a78bfa",D="#58a6ff",x="#67e8f9",V="#6ee7b7",q=({position:r,scale:e=[1,1,1],color:t=z,emissive:i="#24123f",rotation:n=[0,0,0]})=>o.jsxs("mesh",{position:r,scale:e,rotation:n,children:[o.jsx("boxGeometry",{args:[1,1,1]}),o.jsx("meshStandardMaterial",{color:t,emissive:i,emissiveIntensity:.55,metalness:.65,roughness:.28})]}),Ee=()=>{const r=p.useRef();return R(({clock:e})=>{r.current&&(r.current.position.x=-1.25+e.elapsedTime*.7%2.5,r.current.scale.setScalar(.85+Math.sin(e.elapsedTime*4)*.12))}),o.jsxs("group",{rotation:[.12,-.22,0],children:[o.jsx(q,{position:[-1.55,0,0],scale:[1.6,1.15,.32],color:D,emissive:"#082f49"}),o.jsx(q,{position:[1.55,0,0],scale:[1.6,1.15,.32],color:V,emissive:"#064e3b"}),o.jsx(de,{points:[[-.75,0,0],[.75,0,0]],color:x,lineWidth:2.2,transparent:!0,opacity:.72}),o.jsxs("mesh",{ref:r,position:[-1.25,0,.08],children:[o.jsx("sphereGeometry",{args:[.12,20,20]}),o.jsx("meshStandardMaterial",{color:x,emissive:x,emissiveIntensity:1.8})]}),o.jsxs("mesh",{position:[-1.55,0,.28],children:[o.jsx("torusGeometry",{args:[.34,.035,12,56]}),o.jsx("meshStandardMaterial",{color:x,emissive:x,emissiveIntensity:1.1})]}),o.jsxs("mesh",{position:[1.55,0,.28],rotation:[Math.PI/2,0,0],children:[o.jsx("torusKnotGeometry",{args:[.28,.055,80,12]}),o.jsx("meshStandardMaterial",{color:V,emissive:V,emissiveIntensity:.9,metalness:.35})]})]})},Le=()=>{const r=p.useRef(),e=p.useMemo(()=>[[2,.1,.2],[1.05,1.55,-.25],[-1,1.45,.15],[-2,-.15,-.1],[-.9,-1.5,.2],[1.15,-1.45,-.2]],[]);return R(({clock:t})=>{r.current&&(r.current.rotation.z=Math.sin(t.elapsedTime*.22)*.08)}),o.jsxs("group",{ref:r,rotation:[.08,-.18,0],children:[o.jsxs("mesh",{children:[o.jsx("icosahedronGeometry",{args:[.76,2]}),o.jsx("meshStandardMaterial",{color:z,emissive:"#3b1764",emissiveIntensity:.7,metalness:.7,roughness:.22})]}),o.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[o.jsx("torusGeometry",{args:[1.05,.035,12,72]}),o.jsx("meshStandardMaterial",{color:x,emissive:x,emissiveIntensity:.8,transparent:!0,opacity:.8})]}),e.map((t,i)=>o.jsxs("group",{children:[o.jsx(de,{points:[[0,0,0],t],color:i%2?D:z,lineWidth:1.1,transparent:!0,opacity:.45}),o.jsxs("mesh",{position:t,scale:.18,children:[o.jsx("sphereGeometry",{args:[1,20,20]}),o.jsx("meshStandardMaterial",{color:i%2?D:z,emissive:i%2?"#0b4a6f":"#4c1d95",emissiveIntensity:.8})]})]},i))]})},Ae=()=>{const r=p.useRef(),e=p.useMemo(()=>Array.from({length:7},(t,i)=>i),[]);return R(({clock:t})=>{r.current&&(r.current.rotation.y=-.38+Math.sin(t.elapsedTime*.25)*.11)}),o.jsxs("group",{ref:r,rotation:[.12,-.38,-.04],children:[e.map(t=>{const i=(t-3)*.38,n=t===2||t===4;return o.jsx(q,{position:[0,i,t*-.055],scale:[3.1-Math.abs(t-3)*.12,.22,1.35],color:n?D:z,emissive:n?"#0b4a6f":"#2e1065"},t)}),o.jsxs("mesh",{position:[0,0,.85],rotation:[Math.PI/2,0,0],children:[o.jsx("torusGeometry",{args:[1.55,.055,16,96,Math.PI*1.45]}),o.jsx("meshStandardMaterial",{color:x,emissive:x,emissiveIntensity:1.25})]}),o.jsxs("mesh",{position:[.75,-.15,1],children:[o.jsx("sphereGeometry",{args:[.13,20,20]}),o.jsx("meshStandardMaterial",{color:x,emissive:x,emissiveIntensity:1.8})]})]})},Me=({variant:r})=>{const e=p.useRef();return R((t,i)=>{e.current&&(e.current.rotation.y+=i*.08,e.current.position.y=Math.sin(t.clock.elapsedTime*.55)*.08)}),o.jsxs("group",{ref:e,children:[r==="metaxuda"&&o.jsx(Ee,{}),r==="clounar"&&o.jsx(Le,{}),r==="axon"&&o.jsx(Ae,{})]})},ze=({variant:r})=>o.jsx("div",{className:"h-full w-full",children:o.jsxs(Se,{camera:{position:[0,0,6.4],fov:42},dpr:[1,1.35],gl:{antialias:!0,powerPreference:"high-performance",alpha:!0},children:[o.jsx("ambientLight",{intensity:1.15}),o.jsx("directionalLight",{position:[4,5,5],intensity:2.1}),o.jsx("pointLight",{position:[-4,-2,3],intensity:1.5,color:D}),o.jsx("pointLight",{position:[4,2,2],intensity:1.2,color:z}),o.jsx(Me,{variant:r})]})});export{ze as default};
