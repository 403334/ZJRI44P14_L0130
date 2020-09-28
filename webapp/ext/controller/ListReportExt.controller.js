sap.ui.controller("ZJRI44P14_L0130.ext.controller.ListReportExt", {
	// 半年以内
	onClickActionxJRIx44P141003CS1: function (oEvent) {
		//Current日付
		var curDate = (new Date()).getTime();
		//半年（秒単位）
		var halfYear = 365 / 2 * 24 * 3600 * 1000;
		//半年前を計算する
		var pastResult = curDate - halfYear;
		var pastDate = new Date(pastResult);
		var dd = pastDate.getDate();
		var mm = pastDate.getMonth() + 1;
		var yyyy = pastDate.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var DisplayDay = yyyy + '/' + mm + '/' + dd;

		var oSmartFilter = this.getView().byId(
			"ZJRI44P14_L0130::sap.suite.ui.generic.template.ListReport.view.ListReport::xJRIx44P141003CS--listReportFilter");
		var oDefaultFilter = {
			ap_erdat: {
				value: null,
				items: [],
				ranges: [{
					"exclude": false,
					"operation": "GT",
					"keyField": "ap_erdat",
					"value1": DisplayDay,
					"value2": null
				}]
			}
		};
		oSmartFilter.setFilterData(oDefaultFilter);
	},
	// 1年以内
	onClickActionxJRIx44P141003CS2: function (oEvent) {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear() - 1;

		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var DisplayDay = yyyy + '/' + mm + '/' + dd;
		var oSmartFilter = this.getView().byId(
			"ZJRI44P14_L0130::sap.suite.ui.generic.template.ListReport.view.ListReport::xJRIx44P141003CS--listReportFilter");
		var oDefaultFilter = {
			ap_erdat: {
				value: null,
				items: [],
				ranges: [{
					"exclude": false,
					"operation": "GT",
					"keyField": "aperdat",
					"value1": DisplayDay,
					"value2": null
				}]
			}
		};
		oSmartFilter.setFilterData(oDefaultFilter);
	},
	
	onInitSmartFilterBarExtension: function (oEvent) {					
		//URL連携したパラメータの取得				
		var oUrlPara = " ";				
		var oSmartFilter = this.getView().byId(				
			"ZJRI44P14_L0130::sap.suite.ui.generic.template.ListReport.view.ListReport::xJRIx44P141003CS--listReportFilter");	
		if (oUrlPara) {				
			//Filterの定義			
			var oDefaultFilter = {			
				opt_stk_sdi: {		
					value: null,	
					items: [],	
					ranges: [{	
						exclude: false,
						operation: "NE",
						keyField: "opt_stk_sdi",
						value1: oUrlPara,
						value2: null
					}]	
				}		
			};			
			oSmartFilter.setFilterData(oDefaultFilter);			
		}				
	}					
});