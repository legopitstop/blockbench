if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let c={};const f=e=>i(e,b),d={module:{uri:b},exports:c,require:f};s[b]=Promise.all(a.map((e=>d[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"8e7abf3295d467ec4294a943195ad3bf"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation_controllers.js",revision:"15b942d58d75be3bca6789b67bf46663"},{url:"js/animations/animation.js",revision:"589fc7123c42e37631df025c2e07521a"},{url:"js/animations/keyframe.js",revision:"0fd285eba940ecec2c507caf7e860703"},{url:"js/animations/molang.js",revision:"c12c65acbf67ed7649f8446b427abe17"},{url:"js/animations/timeline_animators.js",revision:"0532af205a798a55216b958a88a7fc15"},{url:"js/animations/timeline.js",revision:"93fe48f300f7a367973e8499f90c13d3"},{url:"js/api.js",revision:"3f2f131b9c38a796bee419d8343d1db2"},{url:"js/boot_loader.js",revision:"1a95d6a07a1f0d8cad9402de1cff988c"},{url:"js/copy_paste.js",revision:"82c88b5b13009362d7d791dc45adbb76"},{url:"js/desktop.js",revision:"e5b21a2fac7713b9fab4b43aa110d476"},{url:"js/display_mode.js",revision:"1d383572b08810e5a93f72b1887112b0"},{url:"js/edit_sessions.js",revision:"68656b1508c2bb76c3613c0af520ab44"},{url:"js/file_system.js",revision:"20cc3ef28fb09ec68af14c9b67b12e64"},{url:"js/globals.js",revision:"442493e3975da7568905d8286a1ce8ba"},{url:"js/interface/about.js",revision:"00206dad48b49451f1b8f1c5070663f7"},{url:"js/interface/action_control.js",revision:"5016b10dcb51483e1eaee7edc7432f20"},{url:"js/interface/actions.js",revision:"9852fbcbe8f431bfabff2e6eb132eebe"},{url:"js/interface/dialog.js",revision:"adbb23474679a2d8919ba00e29cf9b2f"},{url:"js/interface/interface.js",revision:"294f27bff836f936685b6b81d0ad35be"},{url:"js/interface/keyboard.js",revision:"9ae3191dbf2b336a51f7acedfa692ade"},{url:"js/interface/menu_bar.js",revision:"481952ca471eb68b575b3d82233bf8c4"},{url:"js/interface/menu.js",revision:"e829e2796940d692f09aa280f975d359"},{url:"js/interface/panels.js",revision:"4bbe8b49119bc2e061e7d5088b20a987"},{url:"js/interface/settings.js",revision:"9eb1053ba55dbd222a82748ea40f4e2d"},{url:"js/interface/start_screen.js",revision:"6396a8bd69eb150365c877c6ecce5266"},{url:"js/interface/themes.js",revision:"7d7b546ba5ca1f58c2232d5a986b7a61"},{url:"js/interface/vue_components.js",revision:"53f9ab390f83a04324f86f0125eb6e82"},{url:"js/io/codec.js",revision:"a050a214b4d0dc405a7e058aa0ce0ce1"},{url:"js/io/format.js",revision:"9949d3fac30f3a8412350fdec514fda4"},{url:"js/io/formats/bbmodel.js",revision:"480d98b4fa1607932a3cc7a4ef953891"},{url:"js/io/formats/bedrock_old.js",revision:"7883129f892e5e49465f67fde86ae3e5"},{url:"js/io/formats/bedrock.js",revision:"ff479e9c263f9a222b80e2a497a5aaef"},{url:"js/io/formats/collada.js",revision:"c28787f79d929bbfce7654dbd93a3af2"},{url:"js/io/formats/fbx.js",revision:"eaf6cfef90f42bc9f30a1a5ee7917e4a"},{url:"js/io/formats/generic.js",revision:"7064ced3120d1345c09d9830571bb5e5"},{url:"js/io/formats/gltf.js",revision:"444aab58f4719f555d7fdd23b84ea21a"},{url:"js/io/formats/image.js",revision:"dfa538983e92d5df2e9425dbe9885381"},{url:"js/io/formats/java_block.js",revision:"f4b7613f5978aadfa27accb986f61636"},{url:"js/io/formats/modded_entity.js",revision:"69a8c5343c8cb924dbf496c231b0a814"},{url:"js/io/formats/obj.js",revision:"db5bc4b405ad407b6b1fb8ff8c4cb8d3"},{url:"js/io/formats/optifine_jem.js",revision:"551a69bdffecb0edfbbf0f38f5d75dfc"},{url:"js/io/formats/optifine_jpm.js",revision:"7902a08955db9db9df5499c03e71b9a7"},{url:"js/io/formats/skin.js",revision:"1a8912e63efaf7da3e5ff3174527c783"},{url:"js/io/io.js",revision:"814f8b243c8fc32400054e1ff4613918"},{url:"js/io/project.js",revision:"7548a00f14593fe0615954aa907919d0"},{url:"js/io/share.js",revision:"6ce4b5c40cdf0fb11099dc91499c9059"},{url:"js/misc.js",revision:"3c20af80589edb4a1f3548d646dddc57"},{url:"js/modeling/mesh_editing.js",revision:"96b09659316a32222f147b0f0563abe1"},{url:"js/modeling/mirror_modeling.js",revision:"59cc2b0586030ce0dfd17376554458fe"},{url:"js/modeling/scale.js",revision:"272523a2b1bedf87e78acdade131f234"},{url:"js/modeling/transform_gizmo.js",revision:"5b794f0632eba19b997280879eb53852"},{url:"js/modeling/transform.js",revision:"07835c7345d9ea586eed78c79fac7dfd"},{url:"js/modes.js",revision:"525abaeb666829556690ccc96c80cae9"},{url:"js/outliner/cube.js",revision:"e0b0c16d14668ccd28cf97087c212a7e"},{url:"js/outliner/group.js",revision:"1fbd276e377cf4787874921a9922e5a1"},{url:"js/outliner/locator.js",revision:"26222291283b788f3c3755f0f594e55b"},{url:"js/outliner/mesh.js",revision:"362ee67fe077435aa4668721244488af"},{url:"js/outliner/null_object.js",revision:"b7087abd8535ecc4020f3278806cf334"},{url:"js/outliner/outliner.js",revision:"6957cc31a637f3d80c1b4e5bcdf89090"},{url:"js/outliner/texture_mesh.js",revision:"441d12e87d30da5182a331d2ceea0790"},{url:"js/plugin_loader.js",revision:"5e2d8b4310c8d57b5bdab74384ea9e77"},{url:"js/predicate_editor.js",revision:"1d4e3d9f6094a7409220495f4cf97f20"},{url:"js/preview/canvas.js",revision:"cd0d90712763f58c600fc22423ebb9d0"},{url:"js/preview/OrbitControls.js",revision:"7ddda0ca2bc697d8a6c97c64bb6294aa"},{url:"js/preview/preview_scenes.js",revision:"2e298d9fbe3d5a753bde0e9c76ade79c"},{url:"js/preview/preview.js",revision:"77398a4e1df171700a686b9a54100fe7"},{url:"js/preview/reference_images.js",revision:"18a5bb96845b5f263497236d9b24cefc"},{url:"js/preview/screenshot.js",revision:"d468e3ce4beb6394a1febaee47dc4c44"},{url:"js/texturing/color.js",revision:"868d4e855ae82be65822eb976edb2ec7"},{url:"js/texturing/edit_texture.js",revision:"ebb1131d318dc347fa1e536d95b16c6b"},{url:"js/texturing/painter.js",revision:"df3fa61ee7a261b6c147b2791a65d8e0"},{url:"js/texturing/texture_generator.js",revision:"f10de24603934c29d39bf89bce37c1e3"},{url:"js/texturing/textures.js",revision:"2e71250c1403834be98a04425850ed3e"},{url:"js/texturing/uv.js",revision:"84c08018e62bc22069f93637433aea4b"},{url:"js/undo.js",revision:"ccfcd9d7a6360f76a3cadeb37226cec0"},{url:"js/util/array_util.js",revision:"655f788b4c2b2f3eb834f4c68d03437f"},{url:"js/util/event_system.js",revision:"65cc10b478b9ab25a38f31473ba15673"},{url:"js/util/math_util.js",revision:"b0fd22aef99eb65706f9da63b801665c"},{url:"js/util/property.js",revision:"c0176313a64ba965e5b58b513203af2e"},{url:"js/util/util.js",revision:"7d825fbbaa23506370ba6413b3cd1fbb"},{url:"js/validator.js",revision:"3021eddb2a0d83ab7342feb713762e5a"},{url:"js/web.js",revision:"997d3f01a7d8f59ddb975d8536f66c62"},{url:"js/webpack/bundle.js",revision:"bcd83c0ece96c2a31996dc609faabb1b"},{url:"lib/canvas2apng.js",revision:"51d5d0955625d02625cf1d5fd72cc37d"},{url:"lib/CanvasFrame.js",revision:"2b5bb3135ca6065f352ec4a56ed2f7e3"},{url:"lib/color-picker.min.js",revision:"1725de455ed2f45daafb69dd90413104"},{url:"lib/fik.min.js",revision:"9985a46a1107966f2375d0c61241c689"},{url:"lib/FileSaver.js",revision:"547422b2d7a739f14eefa1fc1c59c658"},{url:"lib/gif.js",revision:"6760f4c06414ceb8b3d30e14d3a59c69"},{url:"lib/gif.worker.js",revision:"d8cc71ca8334b5002e4481497802c2ac"},{url:"lib/GLTFExporter.js",revision:"d7e7eb8edb4e4e54da61163c8d2501a3"},{url:"lib/jquery-ui.min.js",revision:"f7275ece7d6dea2aec3c23457415695c"},{url:"lib/jquery.js",revision:"3e4bb227fb55271bfe9c9d4a09147bd8"},{url:"lib/jszip.min.js",revision:"5ab88d8028258f8c1d0ae2ab85d1e2bd"},{url:"lib/lzutf8.js",revision:"079e1fb0ed75a7a0b78c41704425bb60"},{url:"lib/marked.min.js",revision:"f12d4a87973b8b958222aca5fdb84394"},{url:"lib/molang-prism-syntax.js",revision:"4b9be48b3e6e9205517a7ff077c2a63e"},{url:"lib/molang.umd.js",revision:"9bc6d7cd9b6b5ce4a3904dd094f29e29"},{url:"lib/peer.min.js",revision:"da4b6c59e67068a4da26ebfc6b52f7c5"},{url:"lib/prism.js",revision:"8b9de8b28b26a713474c0a6e612a85ba"},{url:"lib/purify.min.js",revision:"73b8be8a1f049413506c1578a0cebaaa"},{url:"lib/spectrum.js",revision:"a2be6576c3b44bdb4ffce313816e5a65"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"546b2bfa3c20ab60cfdb8873ba20666b"},{url:"lib/three.min.js",revision:"0a8a3113f4c503210e9a8de577025ff4"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"996550c3ce1487d0f314c0da35a2bba6"},{url:"lib/VuePrismEditor.min.js",revision:"df9e00aa94964cb5b215c1b53ab90484"},{url:"lib/wintersky.umd.js",revision:"fe4d2e3ae49084fe2afa544ecdadd65c"},{url:"css/dialogs.css",revision:"8763cba728d4f0a2cf7dcb5bee7f1ac2"},{url:"css/fontawesome.css",revision:"1cd088b35b0d3fac7265a75875471484"},{url:"css/general.css",revision:"4e648eb60beeeeb54080f9dcfd107eac"},{url:"css/jquery-ui.min.css",revision:"db778110650dea1e4533cd09f75533a2"},{url:"css/panels.css",revision:"c91df9c2751285e5a0db3b35d38217c2"},{url:"css/prism.css",revision:"e6a2c692b28dbb89c1a06154a868bb5c"},{url:"css/setup.css",revision:"186bcfd549c42621f21606fe50d44809"},{url:"css/spectrum.css",revision:"26eb76904b2526a48710e091b211c021"},{url:"css/start_screen.css",revision:"d4803f53a6cbec300fad8bf535c4648c"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"c0ed7e522813a5d026b05b5d6c944e3a"},{url:"assets/armor_stand.png",revision:"d936b2d5fe33f45fc3b67ebace503bf6"},{url:"assets/brush_outline_circle.png",revision:"3a5945dc2a6e095515232e0f2fe7797c"},{url:"assets/brush_outline.png",revision:"751713355b9a3bc8d75b613dff571253"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/locator.png",revision:"8448be12d087adfc0aea285af26ecbe8"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"021abc358f6fd915b2ad77d548bb1954"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"7769bccdd08fde7afc1962cdb836d99a"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/null_object.png",revision:"298d80b3ba99198a3688e8c558dda065"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/plugins.png",revision:"5838610c04e3b5f912344f8c46b73fec"},{url:"assets/poses/aiming.svg",revision:"99cc4acebde8bf10e5578a6ff0c4d418"},{url:"assets/poses/crouching.svg",revision:"ea45f7a8485078ac9fc50bf6cf032542"},{url:"assets/poses/jumping.svg",revision:"268a1a6966abb5b8eef0fc783017b980"},{url:"assets/poses/natural.svg",revision:"1bc79dd4c044a9fd330745699db6d721"},{url:"assets/poses/none.svg",revision:"38929100bfd2f391c3650fdde20b0e03"},{url:"assets/poses/sitting.svg",revision:"23eab940f7e9729a6e24438487553e7d"},{url:"assets/poses/walking.svg",revision:"eee91b6c25b42f5901961d39d35854d5"},{url:"assets/preview_scenes/studio.png",revision:"116be6e8296015a2653fe5a8c6e23ffe"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/splash_art.png",revision:"c7217e28768f89c102003545e4331b5d"},{url:"assets/splash_art/1.png",revision:"eb7b74e358bd69e6344889f629cd6fd9"},{url:"assets/splash_art/2.png",revision:"e5b1bf61629b975ea8b39dc1b9f3c7e4"},{url:"assets/splash_art/3.png",revision:"1af2bf842f9fc0acabf6279f2fa8deb0"},{url:"assets/splash_art/4.png",revision:"723def36e3202e5990dd67e05b10477f"},{url:"assets/splash_art/5.png",revision:"bd1bb6303e34620dce8ad04bd9e8cfb9"},{url:"assets/uv_preview.png",revision:"9171cd9bbc6a55858b4504a11c069f63"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"a5fd9124b9eab1bc7880fea5f1b26e4c"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"font/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"font/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"font/icomoon.ttf",revision:"e41af0d7e74154a711fc444d30b79e80"},{url:"font/icomoon.woff",revision:"86f5286db61fca481661deb53c4cfd3a"},{url:"font/MaterialIcons-Regular.ttf",revision:"4e85bc9ebe07e0340c9c4fc2f6c38908"}],{})}));
