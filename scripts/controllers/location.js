 angular.module('wedding-app')
     .controller('LocationController', function($scope, leafletData, $timeout) {
         var self = this;

         this.markers = {
             nhatrai: {
                 lat: 21.032335,
                 lng: 105.579339,
                 message: "<h2>Nhà trai</h2>" + "<button class='btn btn-primary' type='button'><span class='badge'>Liên Kết, Cần Kiệm, Thạch Thất, Hà Nội</span></button>" + "<button class='btn btn-warning' type='button'>Bố: <span class='badge'>Kiều  Văn  Linh</span></button>" + "<button class='btn btn-success' type='button'>Mẹ: <span class='badge'>Chu  Thị  Tính</span></button>" + "<button class='btn btn-danger' type='button'>Tiệc cưới: <span class='badge'>14h00 ngày 11/02/2017</span></button>" + "<button class='btn btn-danger' type='button'>Hôn lễ: <span class='badge'>11h30 ngày 12/02/2017</span></button>"
             },
             nhagai: {
                 lat: 20.438353,
                 lng: 106.045607,
                 message: "<h2>Nhà gái</h2>" + "<button class='btn btn-primary' type='button'><span class='badge'>Duyên Hạ, Minh Thuận, Vụ Bản, Nam Định</span></button>" + "<button class='btn btn-warning' type='button'>Bố: <span class='badge'>Nguyễn Thanh Nghị</span></button>" + "<button class='btn btn-success' type='button'>Mẹ: <span class='badge'>Phạm Thị Yên</span></button>" + "<button class='btn btn-danger' type='button'>Tiệc cưới: <span class='badge'>10h00 ngày 11/02/2017</span></button>" + "<button class='btn btn-danger' type='button'>Hôn lễ: <span class='badge'>7h30 ngày 12/02/2017</span></button>"
             }
         };

         this.paths = {
             nhagaitonhatrai: {
                 color: '#008000',
                 weight: 8,
                 latlngs: [{ "lat": 21.0323323, "lng": 105.5793452 }, { "lat": 21.0029338, "lng": 105.6291413 }, { "lat": 21.0024473, "lng": 105.6240378 }, { "lat": 21.0021403, "lng": 105.6206556 }, { "lat": 21.0014219, "lng": 105.6241049 }, { "lat": 21.0017699, "lng": 105.6274161 }, { "lat": 21.0027089, "lng": 105.779492 }, { "lat": 21.0016547, "lng": 105.7830941 }, { "lat": 21.0028992, "lng": 105.7898493 }, { "lat": 21.0040035, "lng": 105.7915337 }, { "lat": 21.0028432, "lng": 105.7939326 }, { "lat": 20.9656819, "lng": 105.8444195 }, { "lat": 20.9618692, "lng": 105.8472392 }, { "lat": 20.5433024, "lng": 105.9479435 }, { "lat": 20.5396492, "lng": 105.9475709 }, { "lat": 20.5393753, "lng": 105.9476287 }, { "lat": 20.4831137, "lng": 106.0516579 }, { "lat": 20.4709709, "lng": 106.0439685 }, { "lat": 20.4546174, "lng": 106.0633264 }, { "lat": 20.4393277, "lng": 106.0685294 }, { "lat": 20.4405847, "lng": 106.0476095 }, { "lat": 20.4398002, "lng": 106.0480812 }, { "lat": 20.439637, "lng": 106.0479818 }, { "lat": 20.4383025, "lng": 106.0456287 }],
             }
         };

         this.center = {
             lat: (self.markers.nhatrai.lat + self.markers.nhagai.lat) / 2,
             lng: (self.markers.nhatrai.lng + self.markers.nhagai.lng) / 2,
             zoom: 9
         };

         this.layers = {
             baselayers: {
                 bingRoad: {
                     name: 'Bing Road',
                     type: 'bing',
                     key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                     layerOptions: {
                         type: 'Road'
                     }
                 },
                 bingAerial: {
                     name: 'Bing Aerial',
                     type: 'bing',
                     key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                     layerOptions: {
                         type: 'Aerial'
                     }
                 },
                 bingAerialWithLabels: {
                     name: 'Bing Aerial With Labels',
                     type: 'bing',
                     key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                     layerOptions: {
                         type: 'AerialWithLabels'
                     }
                 }
             }
         };

         this.refreshMap = function() {
             leafletData.getMap().then(function(map) {
                 $timeout(function() {
                     self.markers.nhatrai.focus = true;
                     map.invalidateSize();
                 }, 100);
             });
         }

         $("#location").click(function() {
            self.refreshMap();
         });

         //  this.routes = {
         //      "geocoded_waypoints": [{
         //          "geocoder_status": "OK",
         //          "place_id": "ChIJoeh8mB1aNDERQr6Py3iZ408",
         //          "types": ["route"]
         //      }, {
         //          "geocoder_status": "OK",
         //          "place_id": "ChIJqZzFUeHbNTERqO-DJUHRwXQ",
         //          "types": ["route"]
         //      }],
         //      "routes": [{
         //          "bounds": {
         //              "northeast": {
         //                  "lat": 21.037979,
         //                  "lng": 106.0685294
         //              },
         //              "southwest": {
         //                  "lat": 20.4383025,
         //                  "lng": 105.5793452
         //              }
         //          },
         //          "copyrights": "Map data ©2017 Google",
         //          "legs": [{
         //              "distance": {
         //                  "text": "105 km",
         //                  "value": 105170
         //              },
         //              "duration": {
         //                  "text": "1 hour 50 mins",
         //                  "value": 6628
         //              },
         //              "end_address": "Unnamed Road, Thôn Bịch, Minh Thuận, Vụ Bản, Nam Định, Vietnam",
         //              "end_location": {
         //                  "lat": 20.4383025,
         //                  "lng": 106.0456287
         //              },
         //              "start_address": "Unnamed Road, Thạch Thất, Hà Nội, Vietnam",
         //              "start_location": {
         //                  "lat": 21.0323323,
         //                  "lng": 105.5793452
         //              },
         //              "steps": [{
         //                  "distance": {
         //                      "text": "1.3 km",
         //                      "value": 1275
         //                  },
         //                  "duration": {
         //                      "text": "3 mins",
         //                      "value": 168
         //                  },
         //                  "end_location": {
         //                      "lat": 21.037979,
         //                      "lng": 105.5898876
         //                  },
         //                  "html_instructions": "Head \u003cb\u003enortheast\u003c/b\u003e toward \u003cb\u003eĐT419\u003c/b\u003e/\u003cb\u003eĐT80\u003c/b\u003e",
         //                  "polyline": {
         //                      "points": "a{j_C}}kcS_A]YSW_@CCk@{@gAaBQYc@w@eA{B{@uAAAo@_C_D{IuNea@"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0323323,
         //                      "lng": 105.5793452
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "5.7 km",
         //                      "value": 5699
         //                  },
         //                  "duration": {
         //                      "text": "10 mins",
         //                      "value": 607
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0029338,
         //                      "lng": 105.6291413
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eĐT419\u003c/b\u003e/\u003cb\u003eĐT80\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Nghĩa trang liệt sỹ xã Bình Phú (on the left in 2.9&nbsp;km)\u003c/div\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "k~k_Cy_ncSfIwDrGyCpEwBrAm@lBaAPMBClAeAb@k@FUX_@`@m@\\o@p@aBfAiCn@oADIZe@V]dAoAf@o@`AiAfAsA@A~CiEfLcPjD}El@{@bAwAdA{Ab@m@HKz@iAv@gABCnDkF`AsABCjAeBdEwFrAkBT]dDkFjD_F|@oAjBoCpBsCl@}@b@s@pC_ExAuBjAcBdA{AJOjAaBjA_BfAaBj@aAbCkDlA}A`AoAR]l@{@hAcBzBaDlBsCDGx@kAl@}@V]HKvAmBLQp@{@RQbAcAdAw@x@m@tJoHd@a@vCuB`GiFnEcD"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.037979,
         //                      "lng": 105.5898876
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.5 km",
         //                      "value": 533
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 50
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0024473,
         //                      "lng": 105.6240378
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eĐT419\u003c/b\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "ice_CcuucSN~CdAtUDbAB`A"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0029338,
         //                      "lng": 105.6291413
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.4 km",
         //                      "value": 353
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 27
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0021403,
         //                      "lng": 105.6206556
         //                  },
         //                  "html_instructions": "Continue onto \u003cb\u003eĐCT08\u003c/b\u003e",
         //                  "polyline": {
         //                      "points": "i`e_CgutcSZdF`@|L"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0024473,
         //                      "lng": 105.6240378
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.5 km",
         //                      "value": 457
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 56
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0014219,
         //                      "lng": 105.6241049
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eĐT419\u003c/b\u003e",
         //                  "maneuver": "turn-left",
         //                  "polyline": {
         //                      "points": "k~d_Cc`tcS`BI~AII}Bg@}O"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0021403,
         //                      "lng": 105.6206556
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.3 km",
         //                      "value": 346
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 29
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0017699,
         //                      "lng": 105.6274161
         //                  },
         //                  "html_instructions": "Continue straight onto \u003cb\u003eĐT419\u003c/b\u003e",
         //                  "maneuver": "straight",
         //                  "polyline": {
         //                      "points": "{yd_CsutcSGoA}@gQ"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0014219,
         //                      "lng": 105.6241049
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "16.0 km",
         //                      "value": 15977
         //                  },
         //                  "duration": {
         //                      "text": "13 mins",
         //                      "value": 801
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0027089,
         //                      "lng": 105.779492
         //                  },
         //                  "html_instructions": "Take the ramp on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eĐCT08\u003c/b\u003e",
         //                  "polyline": {
         //                      "points": "a|d_CkjucSo@_CSgAK_Ai@kKQq@[}F_@sHa@cICq@?E{@kSYeI?A?ACyBEoC?_CB{BTgJj@qSR}I\\mOJ_GP{GHaHBsDA{@?a@?c@C{HG_DI}CCYC_@Aa@SkFq@qNUyGAc@Ca@IyCc@qLaAgYi@oN_C{n@i@wL_@kHi@}He@mFe@_Fw@gH}AgLuBgOCKG]s@_FIi@E]E[_@cCiAeIu@gFG]E]O}@_ByKy@uFOmA{@iGoAmI]}BCWEYAMu@cGg@cFC]C[MmB[sEQqEI}CAu@As@?IA_E@wA@}@@}@BmCFyC^aQHgC?O@ORqHViK?K@WTiHPgHT_KFcBHuCf@_QPgGBw@@w@XqL^oM?CDyATeF^uHNoBNgBf@sEZoCnAeKDUDWz@cHdAmIFe@Fc@Hc@l@eFjCcTNmA?GDYDYHk@@IHk@Fk@Fg@D]D]dFw`@P_Bz@_Hz@aHD_@BKXuB`@cDBMv@mGfAuIp@eFf@iERsA"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0017699,
         //                      "lng": 105.6274161
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.4 km",
         //                      "value": 395
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 38
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0016547,
         //                      "lng": 105.7830941
         //                  },
         //                  "html_instructions": "At the interchange \u003cb\u003eTrung Hòa\u003c/b\u003e, keep \u003cb\u003eright\u003c/b\u003e and follow signs for \u003cb\u003ePháp Vân\u003c/b\u003e",
         //                  "maneuver": "ramp-right",
         //                  "polyline": {
         //                      "points": "}ae_Cy`sdSFKDKH[F]Pi@Pi@Lc@HWJa@H]HWHKFm@Jk@h@kEHw@Dk@"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0027089,
         //                      "lng": 105.779492
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.7 km",
         //                      "value": 729
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 65
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0028992,
         //                      "lng": 105.7898493
         //                  },
         //                  "html_instructions": "Continue straight\u003cdiv style=\"font-size:0.9em\"\u003ePass by Garage Số 5 (on the right in 700&nbsp;m)\u003c/div\u003e",
         //                  "maneuver": "straight",
         //                  "polyline": {
         //                      "points": "i{d_CiwsdSJkCDiA@YC_CEiBKiBI}AS_BS{Ac@yBo@kCy@eCUg@]o@CE"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0016547,
         //                      "lng": 105.7830941
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.2 km",
         //                      "value": 214
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 29
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0040035,
         //                      "lng": 105.7915337
         //                  },
         //                  "html_instructions": "Keep \u003cb\u003eright\u003c/b\u003e to continue toward \u003cb\u003eKhuất Duy Tiến\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by 57 (on the right)\u003c/div\u003e",
         //                  "maneuver": "keep-right",
         //                  "polyline": {
         //                      "points": "cce_CqaudSuAoCkByCYe@"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0028992,
         //                      "lng": 105.7898493
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.3 km",
         //                      "value": 323
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 58
         //                  },
         //                  "end_location": {
         //                      "lat": 21.0028432,
         //                      "lng": 105.7939326
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKhuất Duy Tiến\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Công Ty Cp Đầu Tư Sản Xuất &amp; Tm Hà Thành (on the right)\u003c/div\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "_je_CaludS[gAG]EWCY@[BQDYRu@^[\\WROdBsATQf@_@"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0040035,
         //                      "lng": 105.7915337
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "7.1 km",
         //                      "value": 7075
         //                  },
         //                  "duration": {
         //                      "text": "8 mins",
         //                      "value": 497
         //                  },
         //                  "end_location": {
         //                      "lat": 20.9656819,
         //                      "lng": 105.8444195
         //                  },
         //                  "html_instructions": "Take the ramp on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eĐCT20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dịch Vụ Photocopy Kim Oanh (on the right in 300&nbsp;m)\u003c/div\u003e",
         //                  "polyline": {
         //                      "points": "wbe_Ca{udST_@FGvIyGvAiANKNMLQz\\aWrX}RvUkPbBeAfL}HdK}GdLuHtJsGlEwCrFsDlDaCdAq@nA}@v@o@x@u@hAkAdAoAxAsBv@qA`AsBv@sBl@kBf@sB`@kBnBsJ|BoKfBsI^oAf@{ApEuKRi@JUz@sBh@oA`EuJv@oBVq@HUX}@Nk@BKBMNm@TqATqAReBLwAV{E`@}IB_@B_@DcARgFFwC@iC?K?kCAaCBeH"
         //                  },
         //                  "start_location": {
         //                      "lat": 21.0028432,
         //                      "lng": 105.7939326
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.6 km",
         //                      "value": 620
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 56
         //                  },
         //                  "end_location": {
         //                      "lat": 20.9618692,
         //                      "lng": 105.8472392
         //                  },
         //                  "html_instructions": "Take the exit toward \u003cb\u003eĐCT Hà Nội - Ninh Bình\u003c/b\u003e/\u003cb\u003eĐCT01\u003c/b\u003e",
         //                  "maneuver": "ramp-right",
         //                  "polyline": {
         //                      "points": "oz}~Bsv_eSHIDK@UDq@@e@BYD{@?ENuAPu@L]LWJONSRQ^YZMZId@Il@ERALCDC@EnD?|DCb@E"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.9656819,
         //                      "lng": 105.8444195
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "48.9 km",
         //                      "value": 48917
         //                  },
         //                  "duration": {
         //                      "text": "39 mins",
         //                      "value": 2338
         //                  },
         //                  "end_location": {
         //                      "lat": 20.5433024,
         //                      "lng": 105.9479435
         //                  },
         //                  "html_instructions": "Keep \u003cb\u003eright\u003c/b\u003e at the fork and merge onto \u003cb\u003eĐCT Hà Nội - Ninh Bình\u003c/b\u003e/\u003cb\u003eĐCT01\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePartial toll road\u003c/div\u003e",
         //                  "maneuver": "fork-right",
         //                  "polyline": {
         //                      "points": "ub}~Bgh`eSBBDBD@HALCNCRKPIVORSPSZs@Ty@Pi@La@NYTYPO`@Sd@Uj@S^KVEHCFA@A@Cj@Gp@Gn@I`AKXExBe@pAa@d@OrAg@tBaA~@e@v@c@pBkApBoALI~AcAzHaFhLiHtMmInFgDvBqAz@e@@AFCHE\\OFE|@a@~@_@|@]~@[`AW`AU`AU~@OdC_@bCS`AE`AC`AC~@?~@B`A@~@B`GT~FPxAD~CLH?hBBP@zB?xFEN?N?nACxBItF[pMw@RCRAfFY|BIzBGxBClBAL?lDCJ?J?p@ApA@VAT?vBAzB@zB@lJ?lDCnA@pB?tBApBGhBEfEOxBKzCQxHq@zC[j@IRCPChAMlHcAzBa@PChB_@vCm@fB_@jBg@lCq@lCu@j@QPENE~@YlC}@zBu@RIVIpBy@bC_A`CcAhD{ALELGz@_@tF_CXMJEJE`FsBfCcAbC_AfGwBpGsBtGgBxDeAd@MNENE`HkBfFuA`AWVGHCJCfBe@pDmAtDoAhBq@~Am@hAg@~@_@`EqBfEwBHEJGNG`FsCfFaDfHiEpFeDhDwBNILInCcBtBmAXQ`BcAlCcB~@g@~@e@@AB?x@a@~@_@nBm@lBg@rB_@rBUrBOvBGjFFnEHL@N?~EHlF?nFS~BS|BU|B[zB_@nBa@lBc@|EsAhDcAbJkCLCJErFwAzF}AzC{@|EuAjBc@FAJCLCz@QfB_@dBWtBWrBU|D[DAJALA\\EdNaAfCQPANCbM}@lIm@~Hm@d@CPCPAtKy@hMw@dBOtAM|@I|@GhAKNANAv@G|Jw@rBMXCF?n@IrDWrDWpD]tDWpRwATANANAdGe@tHk@~@GLALA~E_@zCUzC_@pCYj@ITERClAUrCg@rCm@x@StAYnCs@n@UFAFC~E}AbDqAnJyDrBy@JEJElCiA~Ao@rDyArGcC`A]HCHCr@WhCw@vBm@vBi@`AUJCJC\\KvBe@jFeAjFcA~MkCdCe@NEPCfAUjFiApBe@nBg@nBi@nBk@zE}AvEcBp@YfDqAvAq@HCFEfBy@pE{BjEeCzJ}FfAm@tBmA~@i@HEHGhBcAxBqA`Ak@bE}BbCyALGJGp@_@n@_@DCFCLIrBiAfDqBhDqBb@U`@WJGpBiArCaBbKaGzJ{F~D{B@ABAxCaB`EsBHEJEDCBArCqAxDcBzD}A|DwAr@W|Bw@FA@ApLaDhFmAjBa@~@SFADAxDo@dEq@~Cc@rBYjBQjBQtCWvBOrBM~ESfAEbBEdBEfBCxCAvDAH?F?|DBbEH`EN`ERP@z@FrBNh@BnCVjALtBVt@HD@F?RBhBTf@HdC\\fCd@vDn@pEr@pC\\r@H|BT|BRdCPF?F@z@FjAFfENfDFtC@BAJ?lCChDIrMm@z@EtCKfCIhCEF?F?dFGH?F?@?~CErF?jMKbQAjKIxD@F?D?vAA`BEpAEfAIjD[bD]vBYjB[bE}@pBg@pAe@@ADAlDuAfDyAdCkAj@]FC@C|@i@jAu@vCmBlIwFvDkClBqAb@YDEBA`Aq@hIwFdEqCBCBCBAf@a@vFwDfFkDBCBC`BiApA_AvDcCBCDA`Aq@`IyF~CsBHGn@_@DCBAx@g@fBaAjAq@VMDABCh@W~Au@d@SnBy@NI|@[tBs@pBm@XIBABAxBk@r@OlB_@tAUBAD?v@OjAOrBWxC[vCQ|@EbACdAC`A?hACfA?~F@jI@nIBB?D?b@?nEAxA@xC?pF@dI@@?FAhB?`MMBAB?tGU~@EbI_@B?DAD?tEa@|J}@p@IjDc@lDc@pC_@fFw@~Cg@LCJAj@G\\GJAJAnEu@vF_AxEy@lCc@nCc@bz@uMDADA`BYfDe@xMwB~B_@zQyCFAD?z@MpCc@nGcAvF}@fIsAnGaALCLCn@KjIqApHmApGcAbG{@fFo@b@GB?DAjC[pEc@zD[dDWdF[pGWfFUnAEBAD?LAtES|G[jH[~AIjI]fHY@?D?~Jg@|Qs@pAGDAB?|Pu@pQs@B?DA\\A`G[hFW`FSP?dI]rMi@j@C^CB?B?TAz@EVATApES`BIhAEl@Az@?nAAzA?t@?nABpAD`BDr@BnCPN@x@FF@F?rCVrDf@rFp@|B\\bIjAfGt@pFp@vDf@`DXvDXfFXxJZdKRnQ`@fGNbBBF@H?n@@~EN|ADzITR@nBFrCHL?"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.9618692,
         //                      "lng": 105.8472392
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.4 km",
         //                      "value": 411
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 66
         //                  },
         //                  "end_location": {
         //                      "lat": 20.5396492,
         //                      "lng": 105.9475709
         //                  },
         //                  "html_instructions": "At the interchange \u003cb\u003eLiêm Tuyền\u003c/b\u003e, keep \u003cb\u003eright\u003c/b\u003e and follow signs for \u003cb\u003ePhủ Lý\u003c/b\u003e/\u003cb\u003eNam Định\u003c/b\u003e/\u003cb\u003eThái Bình\u003c/b\u003e",
         //                  "maneuver": "ramp-right",
         //                  "polyline": {
         //                      "points": "sjk|Bs}seSNJHBNBL@@?B@F?B@J@L@jCRhAHlBNjBBxBAjAC"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.5433024,
         //                      "lng": 105.9479435
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "31 m",
         //                      "value": 31
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 24
         //                  },
         //                  "end_location": {
         //                      "lat": 20.5393753,
         //                      "lng": 105.9476287
         //                  },
         //                  "html_instructions": "Keep \u003cb\u003eleft\u003c/b\u003e to continue toward \u003cb\u003eHà Huy Tập\u003c/b\u003e/\u003cb\u003eQL21B\u003c/b\u003e",
         //                  "maneuver": "keep-left",
         //                  "polyline": {
         //                      "points": "ysj|Bi{seSD?n@K"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.5396492,
         //                      "lng": 105.9475709
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "12.8 km",
         //                      "value": 12835
         //                  },
         //                  "duration": {
         //                      "text": "13 mins",
         //                      "value": 790
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4831137,
         //                      "lng": 106.0516579
         //                  },
         //                  "html_instructions": "At the roundabout, take the \u003cb\u003e3rd\u003c/b\u003e exit onto \u003cb\u003eHà Huy Tập\u003c/b\u003e/\u003cb\u003eQL21B\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow QL21B\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Chot Csgt (on the left in 6.6&nbsp;km)\u003c/div\u003e",
         //                  "maneuver": "roundabout-right",
         //                  "polyline": {
         //                      "points": "crj|Bu{seSFDDFFBB@BBHBF@F@H@HAJ?HCHCHEFEFGHIDKDOBO@QAOEOEOGKAAKKKIIaA?W@O@uA@OJeB@e@VaGN{DB_@JkBFgBZuILgCJgAD[Z_B`@iAb@gAr@oAp@_At@}@|FiHh@s@vW_\\f@s@t@kAtA{Bd@{@x@eBfAeClBoEt@eBdBaEfAgCfBgENWVq@^u@`@}@Tg@tAgCh@y@dA}A~@mAhAsAlC{CpFeGlD}DhAqA~DmEvIwJ~AiBpA}AhDyDr@y@v@y@dAkAt@w@FGvAaBbAgAjAuAt@y@vBgC\\e@l@cAr@mAd@{@Rc@f@iARk@Vo@J]\\kANo@ZsAXaBPgANeAb@uCtBkNn@qEp@uEh@kDDSh@mDd@gDXmB\\yBn@{DVuA`@aBf@iBLa@`@uAfDqIfAoCp@}AxAcD~@yBzAmDrBgFnEsLfBuE~BkGhAsCrBoF|BiGBEx@iBhAcCvCsFdDsFfB_DrDoGpCaFxBwD|AgCLWZg@jAoBZk@p@gAv@uAv@wAp@iANWb@y@`@s@hAmB^q@FKd@{@`@q@vAcCJQLSv@wAHOHMr@uALWN_@f@gAn@_Bh@gB^mANo@^oB@IR{APqA@MXiCXiCRwAZ}Ab@oBZkAf@_B`@gAv@kBv@_BNWZm@j@iAt@sAf@_A|@aBxAiCjCuEhAwBDKnAeCfAqBbJsPhAoBt@aA"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.5393753,
         //                      "lng": 105.9476287
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "1.8 km",
         //                      "value": 1781
         //                  },
         //                  "duration": {
         //                      "text": "4 mins",
         //                      "value": 244
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4709709,
         //                      "lng": 106.0439685
         //                  },
         //                  "html_instructions": "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eĐT975\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Tạp hóa Tiến - Thúy (on the left in 1.7&nbsp;km)\u003c/div\u003e",
         //                  "maneuver": "roundabout-right",
         //                  "polyline": {
         //                      "points": "mr_|B{ehfSB@B?B?BADABABA@Ab@\\JDlAbArAl@THRHTFh@DZ?h@AtE_@dF[|@K|BY|BUPCP@N?\\DL@RDnA\\f@LXHVJ^NZN|@f@d@Z`@Xv@p@TTFF~AfBRRTXNTTf@Tj@r@jBJTR\\Vb@LVJTDJDNRx@J\\d@lAb@`AZ|@\\z@hAxCVj@`@z@Xd@RV"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4831137,
         //                      "lng": 106.0516579
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "2.7 km",
         //                      "value": 2721
         //                  },
         //                  "duration": {
         //                      "text": "3 mins",
         //                      "value": 199
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4546174,
         //                      "lng": 106.0633264
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQL21\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Quán Cơm Xe Tải Phương Nam (on the left in 2.6&nbsp;km)\u003c/div\u003e",
         //                  "maneuver": "turn-left",
         //                  "polyline": {
         //                      "points": "qf}{ByuffSPQf@o@JMzBsCHMdAqA|AsBlCcDxBoCz@eAj@w@RYNYVi@DGDKdA_CJSDIPWX_@X]d@c@XYn@g@fAw@f@a@pAqAr@y@tDwEbBsBlBcCNS~LgOfEoF^i@jB_CzAqBRUdGoH~CwD`@i@z@iAxByC"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4709709,
         //                      "lng": 106.0439685
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "1.8 km",
         //                      "value": 1821
         //                  },
         //                  "duration": {
         //                      "text": "2 mins",
         //                      "value": 139
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4393277,
         //                      "lng": 106.0685294
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eĐT56\u003c/b\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "k`z{BynjfS`@RtA`@t@Rb@H`@D\\Bb@?ZA^Cd@I`@K`@MRG~Ak@rBo@fF_BbA[xEwADA`Bk@^OdIeCTG~JyC`EoA`Cy@tFoB^Mb@OtFoBj@Ob@M"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4546174,
         //                      "lng": 106.0633264
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "2.2 km",
         //                      "value": 2243
         //                  },
         //                  "duration": {
         //                      "text": "4 mins",
         //                      "value": 264
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4405847,
         //                      "lng": 106.0476095
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "y`w{BiokfSAVSdBwBbQg@~D]lCWrBa@hD[bCS|Ac@lD[~BAHIp@WjBQpAQlAMjAUdBOjAKx@Mv@ObAQnAKr@G^ENCJAH?D?F@FBNTnAPlAHf@N~@X|AD^d@rCh@fD?@Nt@Jn@Lt@Hb@Hl@P`ADZV|At@`E"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4393277,
         //                      "lng": 106.0685294
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.1 km",
         //                      "value": 100
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 21
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4398002,
         //                      "lng": 106.0480812
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e",
         //                  "maneuver": "turn-left",
         //                  "polyline": {
         //                      "points": "shw{BqlgfSLGHEl@]v@a@LGNG"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4405847,
         //                      "lng": 106.0476095
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "26 m",
         //                      "value": 26
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 17
         //                  },
         //                  "end_location": {
         //                      "lat": 20.439637,
         //                      "lng": 106.0479818
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "wcw{BoogfSVZFG"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.4398002,
         //                      "lng": 106.0480812
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }, {
         //                  "distance": {
         //                      "text": "0.3 km",
         //                      "value": 288
         //                  },
         //                  "duration": {
         //                      "text": "1 min",
         //                      "value": 45
         //                  },
         //                  "end_location": {
         //                      "lat": 20.4383025,
         //                      "lng": 106.0456287
         //                  },
         //                  "html_instructions": "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
         //                  "maneuver": "turn-right",
         //                  "polyline": {
         //                      "points": "wbw{B{ngfSLNX`@LTDJDF^r@JTZj@LTBDTf@DJR`@@DRh@DLDJLZNj@"
         //                  },
         //                  "start_location": {
         //                      "lat": 20.439637,
         //                      "lng": 106.0479818
         //                  },
         //                  "travel_mode": "DRIVING"
         //              }],
         //              "traffic_speed_entry": [],
         //              "via_waypoint": []
         //          }],
         //          "overview_polyline": {
         //              "points": "a{j_C}}kcSyAq@[c@iDoFaCqEq@aCuSal@zQqIdLuFpAiAj@aAjC_FxCiGfEgFpScYdOyStRoXpYqb@lc@yn@fHwJvE{DzKqIxK_JnEcDN~CjAxW^fH`@|L`BI~AII}Bo@mR}@gQo@_C_@gC{@}L{@qPaBg_@]cMEoGXcNhB}v@\\mXKaPSyFqEqmAsFouAmDs`@iH}g@wI{l@{Fgb@}@kKy@yRLyVxAim@lCkaAz@}\\jAeVpHqn@hFgb@lNkhAtDwYhAuHbBiGf@}BdA{LAmI}@cKsAeGoAmDcF_JcAcDFaBr@qAp@g@xDeDfMwJ\\_@nv@_k@hr@me@|e@u[zJaHbCaC~CcExBeEdB_FvHc^fCcLxFqNdCcGzGmPp@cCnAwHjAqTd@cN?cLLoHFa@PmDn@oD|@mA|B{@tAOlLGbA]xAkBdA_DnBsAdDy@|Dc@dI_C~IwEzO_Kvh@c\\bDwA`GgBjKyAdGMf]dApN?hFMnVyAzQo@|MGbb@?xO_@jVkB`UiDtU{F|IwCnKgEhPcHtVoJfWoHxSuFxPuFjLgFlFmCb^eTvUwNdCoAvIwCfFu@jFWxMRlMHnJg@fNsBbj@gOlNwD|Dy@jQmBb}A_LlaAmHb`@uCnJiAhKoBnIwBrKuDpd@wQdQcFjf@uJtIiB`McDlSmHpEuB`ZmPhEeCxTiMjx@}d@rO{HfRqHfC{@fYeHlKeBjNaB`RiA|UYdWp@jF\\rObBlN|BtOpBrGf@vNf@rHCnYiAzOWv~@[rIWrPoBhKmC`N}F|YwRpVsPzl@oa@dIqEfNyFrC{@pJqBlCa@bNkAxf@Ch`@Br[m@rIa@pXmCjXyDzxAqUfwAaUfm@cJxDe@xWsBta@gBd~@yDxyAoGzLi@vP?rO~@hZbErYhD~Kr@~Vn@b]v@j^`ArAVhDXvDXdF@hCITPlA?XSXu@KaAa@c@E_Ef@}KbBq^|@iDvAwCnK{M~Xs]jCgEtGwNtLuXzEgIhOcQ~c@qg@xM_OvF_ItBuEpAiEvAcIzJ_q@~ByNxBcIzJcV~Mc]dLeZdG}Np]qm@fJ{OnOuX`D}IdAeGfAsJnBqJxDsJlCcFrP}ZbNeVN?NGpEtChB`@`O}@jI_AlAHdDz@pCrAtC|BpC|CtDdI|CvI`D|Hl@|@x@aAvEaG`LmNfBuC|AgDjA_BvD}CbJeK`TsWj[s`@tDcFvBt@xCf@dCOvDmAfa@gMxUkHnP}FnA]U|BuEd_@uD`ZsDbXjF`\\x@hFt@`ELGv@c@dAi@f@RTFf@v@v@|AbAnBxA~D"
         //          },
         //          "summary": "ĐCT Hà Nội - Ninh Bình/ĐCT01",
         //          "warnings": [],
         //          "waypoint_order": []
         //      }],
         //      "status": "OK"
         //  };

         //  function extractSteps() {
         //      var steps = [];
         //      console.log(self.routes);
         //      steps.push(self.routes.routes[0].legs[0].steps[0].start_location);

         //      for (var i = 1; i < self.routes.routes[0].legs[0].steps.length; i++) {
         //          var step = self.routes.routes[0].legs[0].steps[i];
         //          steps.push(step.end_location);
         //      }

         //      console.log(steps);
         //  }
         // extractSteps();
     });
