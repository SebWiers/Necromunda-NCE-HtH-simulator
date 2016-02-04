/*
Welcome to your Widget's Script.

	- You can access your Widget via the 'widget' variable name.
	- You can access your Widget's DOM via the 'element' variable name (undefined until DOM creation).
	- You can access your Dashboard by accessing the 'dashboard' variable name.

	- For a complete API reference for Widgets and Dashboards go here: https://docs.google.com/document/d/1nQBZtWAdNFAd9nBhPWGVT3qOMS4Qm0PzBZVIzz5DfE8/

widget.on('processresult', function(sender, args) {
            	args.result.series[0].regression = true;
            	args.result.series[0].regressionSettings = {
   	                	type: 'linear',
       		                color:  '#29a2a4',
                            	dashStyle : 'dash',
                            	name : 'regression line'
            	};

   });



var segmentAverageRequest = {"datasource":{"title":"Auto","id":"aLOCALHOST_aAUTO","address":"LocalHost","database":"aAuto"},
							 "metadata":[{"jaql":{"table":"Stacked","column":"TheWave","dim":"[Stacked.TheWave]","datatype":"text","merged":true,"title":"WAVE"},"wpanel":"xAxis"},
										 {"jaql":{"table":"Stacked","column":"SEGMENT","dim":"[Stacked.SEGMENT]","datatype":"text","merged":true,"title":"SEGMENT"},"format":{},"wpanel":"series"},
										 {"jaql":{"type":"measure","formula":"sum([ECB6B-A0D]*[1475A-A78]) / ([AD95C-775],[1475A-A78])","context":{"[AD95C-775]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","agg":"sum","title":"Total WEIGHTI"},"[ECB6B-A0D]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","title":"WEIGHTI"},"[1475A-A78]":{"table":"Stacked","column":"FUN704","dim":"[Stacked.FUN10]","datatype":"numeric","title":"FUN704","filter":{"explicit":false,"multiSelection":true,"exclude":{"members":["N\\A"]}},"collapsed":false}},"title":"MEAN"},"format":{"mask":{"type":"number","abbreviations":{"t":true,"b":true,"m":true,"k":true},"separated":true,"decimals":"auto","isdefault":true},"color_bkp":{"color":"#00cee6","type":"color"}},"wpanel":"series"}],
							 "count":20000,"offset":0,"isMaskedResult":true,"format":"json","widget":"5696fc3b41ec4480120000f9;","dashboard":"5696fbc541ec4480120000ef;SegAvgTest","queryGuid":"E2403-420D-E4F5-554A-1F18-0324-84C5-42BB-D"};

*/



	var segmentAverageRequest;


	var trendVariables2 = {
			'FUN_10':  {theVariable: 'FUN_10', meansVariable: 'FUN_10', topBoxValueTemplate: 'TOPBOX', label: 'Dependable'},
			'FUN_164':  {topBoxVariable: 'FUN_164', meansVariable: 'FUN_164', topBoxValueTemplate: 'TOPBOX', label: 'Attractive styling'},
			'FUN_303':  {topBoxVariable: 'FUN_303', meansVariable: 'FUN_303', topBoxValueTemplate: 'TOPBOX', label: 'Versatile vehicle'},
			'FUN_314':  {topBoxVariable: 'FUN_314', meansVariable: 'FUN_314', topBoxValueTemplate: 'TOPBOX', label: 'Affordable'},
			'FUN_37':  {topBoxVariable: 'FUN_37', meansVariable: 'FUN_37', topBoxValueTemplate: 'TOPBOX', label: 'Fun to drive'},
			'FUN_49':  {topBoxVariable: 'FUN_49', meansVariable: 'FUN_49', topBoxValueTemplate: 'TOPBOX', label: 'Lasts a long time'},
			'FUN_51':  {topBoxVariable: 'FUN_51', meansVariable: 'FUN_51', topBoxValueTemplate: 'TOPBOX', label: 'Luxurious'},
			'FUN_55':  {topBoxVariable: 'FUN_55', meansVariable: 'FUN_55', topBoxValueTemplate: 'TOPBOX', label: 'Prestigious'},
			'FUN_609':  {topBoxVariable: 'FUN_609', meansVariable: 'FUN_609', topBoxValueTemplate: 'TOPBOX', label: 'Environmentally friendly'},
			'FUN_613':  {topBoxVariable: 'FUN_613', meansVariable: 'FUN_613', topBoxValueTemplate: 'TOPBOX', label: 'Responsive handling'},
			'FUN_703':  {topBoxVariable: 'FUN_703', meansVariable: 'FUN_703', topBoxValueTemplate: 'TOPBOX', label: 'Quality materials, fit and finish'},
			'FUN_704' : {topBoxVariable: 'FUN_704', meansVariable: 'FUN_704', topBoxValueTemplate: 'TOPBOX', label: 'Advanced features'},
			'FUN_705':  {topBoxVariable: 'FUN_705', meansVariable: 'FUN_705', topBoxValueTemplate: 'TOPBOX', label: 'Comfortable for the driver'},
			'FUN_706':  {topBoxVariable: 'FUN_706', meansVariable: 'FUN_706', topBoxValueTemplate: 'TOPBOX', label: 'Fuel efficient'},
			'FUN_708':  {topBoxVariable: 'FUN_708', meansVariable: 'FUN_708', topBoxValueTemplate: 'TOPBOX', label: 'Retains its resale value'},
			'FUN_709':  {topBoxVariable: 'FUN_709', meansVariable: 'FUN_709', topBoxValueTemplate: 'TOPBOX', label: 'Safe'},
			'FUN_710':  {topBoxVariable: 'FUN_710', meansVariable: 'FUN_710', topBoxValueTemplate: 'TOPBOX', label: 'Value for the money'},
			'FUN_711':  {topBoxVariable: 'FUN_711', meansVariable: 'FUN_711', topBoxValueTemplate: 'TOPBOX', label: 'Vehicle is the right size'},
			'FUN_733':  {topBoxVariable: 'FUN_733', meansVariable: 'FUN_733', topBoxValueTemplate: 'TOPBOX', label: 'Quick acceleration'},
			'FUN_734':  {topBoxVariable: 'FUN_734', meansVariable: 'FUN_734', topBoxValueTemplate: 'TOPBOX', label: 'Functional work vehicle'},
			'FUN_735':  {topBoxVariable: 'FUN_735', meansVariable: 'FUN_735', topBoxValueTemplate: 'TOPBOX', label: 'Capable payload/towing capacity'},
			'FUN_736':  {topBoxVariable: 'FUN_736', meansVariable: 'FUN_736', topBoxValueTemplate: 'TOPBOX', label: 'Capable towing capacity'},
			'FUN_737':  {topBoxVariable: 'FUN_737', meansVariable: 'FUN_737', topBoxValueTemplate: 'TOPBOX', label: 'Versatile on-road/off-road vehicle'},
			'FUN_752':  {topBoxVariable: 'FUN_752', meansVariable: 'FUN_752', topBoxValueTemplate: 'TOPBOX', label: 'Customer-oriented dealerships'},
			'PER_321':  {topBoxVariable: 'PER_321', meansVariable: 'PER_321', topBoxValueTemplate: 'TOPBOX', label: 'Arrogant'},
			'PER_608':  {topBoxVariable: 'PER_608', meansVariable: 'PER_608', topBoxValueTemplate: 'TOPBOX', label: 'Innovative'},
			'PER_712':  {topBoxVariable: 'PER_712', meansVariable: 'PER_712', topBoxValueTemplate: 'TOPBOX', label: 'Passionate'},
			'PER_713':  {topBoxVariable: 'PER_713', meansVariable: 'PER_713', topBoxValueTemplate: 'TOPBOX', label: 'Trusted'},
			'PER_714':  {topBoxVariable: 'PER_714', meansVariable: 'PER_714', topBoxValueTemplate: 'TOPBOX', label: 'Adventurous'},
			'PER_716':  {topBoxVariable: 'PER_716', meansVariable: 'PER_716', topBoxValueTemplate: 'TOPBOX', label: 'Responsible'},
			'PER_718':  {topBoxVariable: 'PER_718', meansVariable: 'PER_718', topBoxValueTemplate: 'TOPBOX', label: 'Practical'},
			'PER_720':  {topBoxVariable: 'PER_720', meansVariable: 'PER_720', topBoxValueTemplate: 'TOPBOX', label: 'Confident'},
			'PER_86':  {topBoxVariable: 'PER_86', meansVariable: 'PER_86', topBoxValueTemplate: 'TOPBOX', label: 'Aggressive'},
			'PER_87':  {topBoxVariable: 'PER_87', meansVariable: 'PER_87', topBoxValueTemplate: 'TOPBOX', label: 'Exciting'},
			'PER_95':  {topBoxVariable: 'PER_95', meansVariable: 'PER_95', topBoxValueTemplate: 'TOPBOX', label: 'Distinctive'},
			'PER_747':  {topBoxVariable: 'PER_747', meansVariable: 'PER_747', topBoxValueTemplate: 'TOPBOX', label: 'None of the above'},
			'ATTCHM_1': {topBoxVariable: 'ATTCHM_1', meansVariable: 'ATTCHM_1', topBoxValueTemplate: 'TOPBOX', label: 'I’m more likely to notice ads from this brand/model'},
			'ATTCHM_2': {topBoxVariable: 'ATTCHM_2', meansVariable: 'ATTCHM_2', topBoxValueTemplate: 'TOPBOX', label: 'This brand/model fits my personality'},
			'ATTCHM_3': {topBoxVariable: 'ATTCHM_3', meansVariable: 'ATTCHM_3', topBoxValueTemplate: 'TOPBOX', label: 'I’m willing to pay more for this brand/model'},
			'ATTCHM_4': {topBoxVariable: 'ATTCHM_4', meansVariable: 'ATTCHM_4', topBoxValueTemplate: 'TOPBOX', label: 'I’ve heard good things about this brand/model'},
			'ATTCHM_5': {topBoxVariable: 'ATTCHM_5', meansVariable: 'ATTCHM_5', topBoxValueTemplate: 'TOPBOX', label: 'I’d be proud to own this brand/model '}


	};



	var trendVariables = {
			'FUN_10':  {theVariable: 'FUN10', label: 'Dependable'},
			'FUN_164':  {theVariable: 'FUN164', label: 'Attractive styling'},
			'FUN_303':  {theVariable: 'FUN303', label: 'Versatile vehicle'},
			'FUN_314':  {theVariable: 'FUN314', label: 'Affordable'},
			'FUN_37':  {theVariable: 'FUN37', label: 'Fun to drive'},
			'FUN_49':  {theVariable: 'FUN49', label: 'Lasts a long time'},
			'FUN_51':  {theVariable: 'FUN51', label: 'Luxurious'},
			'FUN_55':  {theVariable: 'FUN55', label: 'Prestigious'},
			'FUN_609':  {theVariable: 'FUN609', label: 'Environmentally friendly'},
			'FUN_613':  {theVariable: 'FUN613', label: 'Responsive handling'},
			'FUN_703':  {theVariable: 'FUN703', label: 'Quality materials, fit and finish'},
			'FUN_704' : {theVariable: 'FUN704', label: 'Advanced features'},
			'FUN_705':  {theVariable: 'FUN705', label: 'Comfortable for the driver'},
			'FUN_706':  {theVariable: 'FUN706', label: 'Fuel efficient'},
			'FUN_708':  {theVariable: 'FUN708', label: 'Retains its resale value'},
			'FUN_709':  {theVariable: 'FUN709', label: 'Safe'},
			'FUN_710':  {theVariable: 'FUN710', label: 'Value for the money'},
			'FUN_711':  {theVariable: 'FUN711', label: 'Vehicle is the right size'},
			'FUN_733':  {theVariable: 'FUN733', label: 'Quick acceleration'},
			'FUN_734':  {theVariable: 'FUN734', label: 'Functional work vehicle'},
			'FUN_735':  {theVariable: 'FUN735', label: 'Capable payload/towing capacity'},
			'FUN_736':  {theVariable: 'FUN736', label: 'Capable towing capacity'},
			'FUN_737':  {theVariable: 'FUN737', label: 'Versatile on-road/off-road vehicle'},
			'FUN_748':	{theVariable: 'FUN748', label: 'Functional work vehicles'},
			'FUN_752':  {theVariable: 'FUN752', label: 'Customer-oriented dealerships'},
			'PER_321':  {theVariable: 'PER321', label: 'Arrogant'},
			'PER_608':  {theVariable: 'PER608', label: 'Innovative'},
			'PER_712':  {theVariable: 'PER712', label: 'Passionate'},
			'PER_713':  {theVariable: 'PER713', label: 'Trusted'},
			'PER_714':  {theVariable: 'PER714', label: 'Adventurous'},
			'PER_716':  {theVariable: 'PER716', label: 'Responsible'},
			'PER_718':  {theVariable: 'PER718', label: 'Practical'},
			'PER_720':  {theVariable: 'PER720', label: 'Confident'},
			'PER_86':  {theVariable: 'PER86', label: 'Aggressive'},
			'PER_87':  {theVariable: 'PER87', label: 'Exciting'},
			'PER_95':  {theVariable: 'PER95', label: 'Distinctive'},
			'PER_747':  {theVariable: 'PER747', label: 'None of the above'},
			'ATTCHM_1': {theVariable: 'ATTCHM1', label: 'I’m more likely to notice ads from this brand/model'},
			'ATTCHM_2': {theVariable: 'ATTCHM2', label: 'This brand/model fits my personality'},
			'ATTCHM_3': {theVariable: 'ATTCHM3', label: 'I’m willing to pay more for this brand/model'},
			'ATTCHM_4': {theVariable: 'ATTCHM4', label: 'I’ve heard good things about this brand/model'},
			'ATTCHM_5': {theVariable: 'ATTCHM5', label: 'I’d be proud to own this brand/model'}
	};

	var segmentVariablesPER747 = {
		'Entry Cars': ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Fullsize Car Alt' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sports Cars' : ['FUN_704','FUN_314','FUN_164','FUN_705','FUN_10','FUN_609','FUN_706','FUN_37','FUN_49','FUN_55','FUN_703','FUN_733','FUN_613','FUN_708','FUN_709','FUN_710','FUN_711','PER_87','PER_712','PER_95','PER_713','PER_714','PER_716','PER_608','PER_718','PER_86','PER_321','PER_720','PER_747','ATTCHM_1','ATTCHM_2','ATTCHM_3','ATTCHM_4','ATTCHM_5'],
		'Light Vehicle Makes - 450 Ratings' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Near-Entry Luxury' : ['FUN_704', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Pickup Trucks - Fullsize - Half Ton' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_735', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_734', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Small Cars' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Midsize' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_737', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Premium Midsize Alt' : ['FUN_704', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_303', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Small' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_737', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sporty' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Vans - Compact' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_303', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Luxury Makes - 450 Ratings' : ['FUN_704', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Lower Middle Alt' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Pickup Trucks - Fullsize - Heavy Duty - Chrysler' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_735', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_734', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Truck Makes Custom - Chrysler' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_748', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5']

	};


	var segmentVariables = {
		'Entry Cars': ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Fullsize Car Alt' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sports Cars' : ['FUN_704','FUN_314','FUN_164','FUN_705','FUN_10','FUN_609','FUN_706','FUN_37','FUN_49','FUN_55','FUN_703','FUN_733','FUN_613','FUN_708','FUN_709','FUN_710','FUN_711','PER_87','PER_712','PER_95','PER_713','PER_714','PER_716','PER_608','PER_718','PER_86','PER_321','PER_720','ATTCHM_1','ATTCHM_2','ATTCHM_3','ATTCHM_4','ATTCHM_5'],
		'Light Vehicle Makes - 450 Ratings' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Near-Entry Luxury' : ['FUN_704', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Pickup Trucks - Fullsize - Half Ton' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_735', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_734', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Small Cars' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Midsize' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_737', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720',  'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Premium Midsize Alt' : ['FUN_704', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_303', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sport Utility - Small' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_736', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_737', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Sporty' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Vans - Compact' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'FUN_303', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Luxury Makes - 450 Ratings' : ['FUN_704', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_51', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Lower Middle Alt' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Pickup Trucks - Fullsize - Heavy Duty - Chrysler' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_735', 'FUN_705', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_734', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'FUN_711', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5'],
		'Truck Makes Custom - Chrysler' : ['FUN_704', 'FUN_314', 'FUN_164', 'FUN_705', 'FUN_752', 'FUN_10', 'FUN_609', 'FUN_706', 'FUN_37', 'FUN_748', 'FUN_49', 'FUN_55', 'FUN_703', 'FUN_733', 'FUN_613', 'FUN_708', 'FUN_709', 'FUN_710', 'PER_87', 'PER_712', 'PER_95', 'PER_713', 'PER_714', 'PER_716', 'PER_608', 'PER_718', 'PER_86', 'PER_321', 'PER_720', 'PER_747','ATTCHM_1', 'ATTCHM_2', 'ATTCHM_3', 'ATTCHM_4', 'ATTCHM_5']

	};


	var reloadDropDownList = function() {
		$("#trend_variable").empty(dashboard);
		var variableOptions = [];
		var segmentFilter = _.find(dashboard.filters.getEnabledItems()[0].levels, function (item) {
			return item.table == "Stacked"
		} );
		if ((segmentFilter.filter && segmentFilter.filter.members)) {
			// get a list of all of the unique variables
			var fullVariableList = [];
			_.each(segmentFilter.filter.members, function (member) {
				if (segmentVariables[member]) {
					fullVariableList = _.union(fullVariableList, segmentVariables[member]);
				}
			});
			variableOptions = _.map(fullVariableList, function (variable) { return trendVariables[variable];});
		} else {
			variableOptions = _.map(trendVariables, function (variable) { return variable;})
		}
		// now we have a list of variables for use in the structure of the json above
		_.each(variableOptions, function (variable, key) {

			$("#trend_variable").append( $("<option>")
				.val(variable.theVariable)
				.html(variable.label.toUpperCase())
			);
        });

		var select = $('#trend_variable').css({
			"display":"inline",
    		"margin-right": "20px",
    		"margin-left": "10px",
			"margin-top": "20px",
			"margin-bottom": "20px",
    		"background-color": "#cfcfcf",
			"overflow": "hidden",
			"padding":"0 0 0 8px",
			"background-repeat": "no-repeat",
    		"background-position": "right center",
			"cursor": "pointer",
   			"user-select": "none",
    		"-webkit-user-select": "none",
			"text-decoration" : "none",
    		"color": "#000",
    		"line-height": "1.3em",
    		"font-family": "InsightWeb, Arial, Helvetica, sans-serif",
    		"font-weight": "normal",
			"-webkit-appearance":"menulist",
			"box-sizing":"border-box",
			"align-items":"center",
			"white-space":"pre",
			"-webkit-rtl-ordering":"logical",
			"color":"black",
			"border":"1px solid",

		});


		var prevGroup, $group = $();

		$('option', select).remove().each(function() {

			group = $(this).val().substring(0, 3)
			if (group != "PER") {
				switch (group) {
					case "FUN":
						grouplabel = "Image Functional Attributes";
						break;
					case "PER":
						grouplabel = "Image Personality Attributes";
						break;
					case "ATT":
						grouplabel = "Image Attachment Measures";
						break;
				};

				if (group != prevGroup) {
					$group = $('<optgroup />', { label: grouplabel }).appendTo('#trend_variable');
				}

				$group.append($('<option />', {
					text: $(this).text(),
					value: $(this).val()
				}));


				prevGroup = group;
			};
		});
	};







	var reloadCalcsList = function() {
		$("#trend_calc").empty(dashboard);
		var variableOptions = [{label:'MEAN'},{label:'TOPBOX'},{label:'TOP2BOX'},{label:'% YES'}];
		// now we have a list of variables for use in the structure of the json above
		_.each(variableOptions, function (variable, key) {

			$("#trend_calc").append( $("<option>")
				.val(key)
				.html(variable.label)
			).css({
			"display":"inline",
    		"margin-left": "8px",
			"margin-bottom": "20px",
			"margin-top": "40px",
    		"background-color": "#cfcfcf",
			"overflow": "hidden",
			"padding":"0 0 0 8px",
			"background-repeat": "no-repeat",
    		"background-position": "right center",
			"cursor": "pointer",
   			"user-select": "none",
    		"-webkit-user-select": "none",
			"text-decoration" : "none",
    		"color": "#000",
    		"line-height": "1.3em",
    		"font-family": "InsightWeb, Arial, Helvetica, sans-serif",
    		"font-weight": "normal",
			"-webkit-appearance":"menulist",
			"box-sizing":"border-box",
			"align-items":"center",
			"white-space":"pre",
			"-webkit-rtl-ordering":"logical",
			"color":"black",
			"border":"1px solid",


		}) ;
		});
	};



	var aTest;

widget.on('buildquery',function (w,e) {
	//debugger;
});


widget.on('ready', function (w, e) {
	
	
			
	if($('#trend_variable').length == 0) {


		if($('#nav_bar').length == 0) {

			//debugger;
			var  theBox = $('#prism-mainview > div.collapsible-pane-holder.ng-scope > div.collapsible-pane.errvil-warpper > div > dashboard > div > div.content '+
							'> div > div.ng-scope > div > div > div > div.dashboard-layout-subcell-host.ng-scope > div > widget').height()
			var newHeight;

			newHeight = theBox + 300;	

			$('#prism-mainview > div.collapsible-pane-holder.ng-scope > div.collapsible-pane.errvil-warpper > div > dashboard > '+
			  'div > div.content > div > div.ng-scope > div > div > div > div.dashboard-layout-subcell-host.ng-scope > div > widget').css({'height':newHeight})

			var wigHeight = $("[widgetid='5696fbc541ec4480120000f0']").height()
			var newWigHeight;


			newWigHeight = newHeight + 300

			$("[widgetid='5696fbc541ec4480120000f0']").css({'height':newWigHeight+'px'})

			
			//debugger
			//var wigHeight = $("[widgetid='5696fbc541ec4480120000f0']").height()

			//var heightDiff = newHeight - wigHeight
			
			
			//wigHeight = wigHeight + 150

			//$("[widgetid='5696fbc541ec4480120000f0']").css({'height':wigHeight+'px'})
			
			//$(".dashboard-layout-subcell-host ng-scope").height()
			

			//debugger;
			
			//$("[widgetid='5696fbc541ec4480120000f0']").prepend('<div id="navBar" style="background-color:#f2f2f2">\
			//		<div id="selectBox" class="Selectbox Control control trueselectbox -selectbox" style="display:inline;"> <select id="trend_calc" class="_clickable"></select></div>\
			//		<div id="selectBox" class="Selectbox Control control trueselectbox -selectbox" style="display:inline;"> <select id="trend_variable" class="_clickable"></select></div></div>')
			
			$("#prism-mainview").prepend('<div id="navBar" style="background-color:#f2f2f2;height: 60px;">\
					<div id="selectBox" class="Selectbox Control control trueselectbox -selectbox" style="display:inline;"> <select id="trend_calc" class="_clickable"></select></div>\
					<div id="selectBox" class="Selectbox Control control trueselectbox -selectbox" style="display:inline;"> <select id="trend_variable" class="_clickable"></select></div>\
					<div id="checkBox1" 	style="display:inline;"><label style="display: inline;font-family: InsightWeb, Arial, Helvetica, sans-serif;font-weight: bolder;font-size: inherit;">\
					<input type="checkbox" id="setAvg" value="value" style="display: inline;font-family: InsightWeb, Arial, Helvetica, sans-serif;font-weight: normal;">Include Set Avgerage</label></div>\
					<div id="checkBox2" 	style="display:inline;"><label style="display: inline;font-family: InsightWeb, Arial, Helvetica, sans-serif;font-weight: bolder;font-size: inherit;">\
					<input type="checkbox" id="segAvg" value="value" style="display: inline;font-family: InsightWeb, Arial, Helvetica, sans-serif;font-weight: normal;">Include Segment Avgerages</label></div></div>')

			

			
			reloadCalcsList();

		};

		$('#trend_calc').change(function() {
				//reloadDropDownList()

				var select = $('#trend_variable')
				var calcPicked = $('#trend_calc').find(":selected").text()
				var prevGroup, $group = $();

				$('optgroup', select).remove().each;

				var variableOptions = [];
				var segmentFilter = _.find(dashboard.filters.getEnabledItems()[0].levels, function (item) {
					return item.table == "Stacked"
				} );
				if (segmentFilter.filter && segmentFilter.filter.members) {
					// get a list of all of the unique variables
					var fullVariableList = [];
					_.each(segmentFilter.filter.members, function (member) {
						if (segmentVariables[member]) {
							fullVariableList = _.union(fullVariableList, segmentVariables[member]);
						}
					});
					variableOptions = _.map(fullVariableList, function (variable) { return trendVariables[variable];});
				} else {
					variableOptions = _.map(trendVariables, function (variable) { return variable;})
				}
				// now we have a list of variables for use in the structure of the json above
				_.each(variableOptions, function (variable, key) {

					$("#trend_variable").append( $("<option>")
						.val(variable.theVariable)
						.html(variable.label.toUpperCase())
					);
				});

				$('option', select).remove().each(function() {
					group = $(this).val().substring(0, 3)
					if (((calcPicked == "MEAN" || calcPicked == "TOPBOX" || calcPicked == "TOP2BOX") && (group == 'FUN' || group == 'ATT' )) || ((calcPicked == "% YES") && (group == 'PER'))) {

						switch (group) {
							case "FUN":
								grouplabel = "Image Functional Attributes";
								break;
							case "PER":
								grouplabel = "Image Personality Attributes";
								break;
							case "ATT":
								grouplabel = "Image Attachment Measures";
								break;
						};

						if (group != prevGroup) {
							$group = $('<optgroup />', { label: grouplabel }).appendTo('#trend_variable');
						}

						$group.append($('<option />', {
							text: $(this).text(),
							value: $(this).val()
						}));

					prevGroup = group;
				};
			});
		});




		//$("[widgetid='5696fbc541ec4480120000f0']").change(function () {
		$("#prism-mainview").change(function () {
			
			
			//debugger;
			
			var selectedVar = $('#trend_variable').find(":selected").val()
			var selectedLabel = $('#trend_variable').find(":selected").text();

			var selectedCalc = $('#trend_calc').find(":selected").text();

			// you can find the measure you want to activate by something like this:
			var measure = _.find(w.items(), function (item) {
				if (item.jaql.type == "measure") {
					if (item.jaql.title == selectedCalc) {
						i = 0;
						for (var context in item.jaql.context)
						{
							//context = item.jaql.context[context]
							if (item.jaql.context[context].column != "WEIGHTI") {
								item.jaql.context[context].column = selectedVar;
								item.jaql.context[context].title = selectedVar;
							};
							i = i + 1;
						};

						item.disabled = false;
					} else {
						item.disabled = true;
					};
				};
				return ;
			});
			//var measure =  "MEAN_" + selectedVar;
			//item.jaql.title == measure;

			console.log(measure);

			// this refreshes the widget

			w.refresh()
			
		} );
		// you can add another drop down like this for the measure, then when either of them change you just have to
		reloadDropDownList(w.dashboard);
		var initVal = $('#trend_variable').find(":selected").val();
		var initCalc = $('#trend_calc').find(":selected").text();
		if (initVal.length > 0) {
			var initMeasure = _.find(w.items(), function (item) {
				if (item.jaql.type == "measure") {
					if (item.jaql.title == initCalc) {
							i = 0;
							for (var context in item.jaql.context)
							{
									//context = item.jaql.context[context]
								if (item.jaql.context[context].column != "WEIGHTI") {
										item.jaql.context[context].column = initVal;
										item.jaql.context[context].title = initVal;
								};
								i = i + 1;
							};

								item.disabled = false;
						} else {
								item.disabled = true;
						};
				};
				widget.refresh()
				return ;
			});
		};


		// register for change events on the dashboard
		w.dashboard.on('filterschanged', function (d, e) {
			reloadDropDownList();
		});
		w.loadedCustom = true;
		




	}

	//w.sizing().height = w.sizing().height + 300





});


/* widget.on('processresult', function(w,e) {

	for (var series in e.result.series)
	{

		series = e.result.series[series];
		theInfo = series.name.split(' ')
//		alert(theInfo);
		series.color = w.dashboard.changeColor(series.name);

	}

});
*/

widget.on('processresult', function(w,e) {

	
	// running sum first series
	var segAvg = []
	var segDenom = []	
	var filtSeg = {}
	var trueSegAvg = {}
	
	var cnt = 0
	
	if ($('#setAvg').is(':checked')) {	
		debugger;
		_.each(e.result.series,function(series) {
			eb = 0
			console.log(series)
			_.each(series.data,function(dadata) {
					//nsole.log(dadata)
					if (dadata.y != null) {
						var aYear = dadata.selectionData[0]
						filtSeg[aYear] = aYear
					};

					theYbyX = dadata.y
					if (theYbyX == null) {
						theDenom = 0
					} else {
						theDenom = 1
					};

					if (cnt == 0) {
						segAvg.push(theYbyX)	
						segDenom.push(theDenom)
					} else {
						segAvg[eb] = segAvg[eb] + theYbyX
						segDenom[eb] = segDenom[eb] + theDenom
					};		

					eb = eb + 1
			});
				cnt = cnt + 1
		});

		console.log(filtSeg)

		if (e.result.series.length > 1) {
			e.result.series.push(JSON.parse(JSON.stringify(e.result.series[0])))
			var newOne = e.result.series[e.result.series.length - 1]
			newOne.name = "SET AVG"
			newOne.color = "#e55a00"
			newOne.mask = e.result.series[0].mask


			var theOuts = []
			for (var i = 0 ; i < newOne.data.length ; i++) {
				if (segDenom[i] > 0) {
					avgSeg = segAvg[i] / segDenom[i];
				} else {
					avgSeg = 0
				}
				newOne.data[i] = avgSeg;
			}	
		};
		w.refresh()
	};

//****************************************************************************************************************************************		
	
	for (var series in e.result.series)
	{

		series = e.result.series[series];
		theInfo = series.name.split(' ')
//		alert(theInfo);
		series.color = w.dashboard.changeColor(series.name);

	}
	
	var segmentFilter = _.find(dashboard.filters.getEnabledItems()[0].levels, function (item) {
			return item.table == "Stacked"
	});
	
//####################################################################################################################################################################################################
	
	
	var FORMU;
	var CALC;
	console.log(segmentFilter)
	//if ($('#segAvg').is(':checked')) {
	var conText = {};
	
		var measure = _.find(w.items(), function (item) {
			if (item.jaql.type == "measure" && item.disabled == false) {
				conText = item.jaql.context
				for (var context in item.jaql.context) {
					if (item.jaql.context[context].column != "WEIGHTI") {
						ATEST = item.jaql.context[context].column
						CALC = item.jaql.title 
						FORMU = item.jaql.formula
					};
				

					
				};
			};
		});
		
	
	
//####################################################################################################################################################################################################
	
		//debugger;
		//segmentAverageRequest = {"datasource":{"title":"Auto","id":"aLOCALHOST_aAUTO","address":"LocalHost","database":"aAuto"},"metadata":[{"jaql":{"table":"Stacked","column":"TheWave","dim":"[Stacked.TheWave]","datatype":"text","merged":true,"title":"WAVE"},"wpanel":"xAxis"},{"jaql":{"table":"Stacked","column":"SEGMENT","dim":"[Stacked.SEGMENT]","datatype":"text","merged":true,"title":"SEGMENT"},"format":{},"wpanel":"series"},{"jaql":{"type":"measure","formula":FORMU,"context":{"[AD95C-775]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","agg":"sum","title":"Total WEIGHTI"},"[ECB6B-A0D]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","title":"WEIGHTI"},"[1475A-A78]":{"table":"Stacked","column":ATEST,"dim":"[Stacked." + ATEST + "]","datatype":"numeric","title":ATEST,"filter":{"explicit":false,"multiSelection":true,"exclude":{"members":["N\\A"]}},"collapsed":false}},"title":CALC},"format":{"mask":{"type":"number","abbreviations":{"t":true,"b":true,"m":true,"k":true},"separated":true,"decimals":"auto","isdefault":true},"color_bkp":{"color":"#00cee6","type":"color"}},"wpanel":"series"}],"count":20000,"offset":0,"isMaskedResult":true,"format":"json","widget":"5696fc3b41ec4480120000f9;","dashboard":"5696fbc541ec4480120000ef;SegAvgTest","queryGuid":"E2403-420D-E4F5-554A-1F18-0324-84C5-42BB-D"};
//		debugger;
		segmentAverageRequest = {"datasource":{"title":"Auto","id":"aLOCALHOST_aAUTO","address":"LocalHost","database":"aAuto"},"metadata":[{"jaql":{"table":"Stacked","column":"TheWave","dim":"[Stacked.TheWave]","datatype":"text","merged":true,"title":"WAVE"},"wpanel":"xAxis"},{"jaql":{"table":"Stacked","column":"SEGMENT","dim":"[Stacked.SEGMENT]","datatype":"text","merged":true,"title":"SEGMENT"},"format":{},"wpanel":"series"},{"jaql":{"type":"measure","formula":FORMU,"context":conText,"title":CALC},"format":{"mask":{"type":"number","abbreviations":{"t":true,"b":true,"m":true,"k":true},"separated":true,"decimals":"auto","isdefault":true},"color_bkp":{"color":"#00cee6","type":"color"}},"wpanel":"series"}],"count":20000,"offset":0,"isMaskedResult":true,"format":"json","widget":"5696fc3b41ec4480120000f9;","dashboard":"5696fbc541ec4480120000ef;SegAvgTest","queryGuid":"E2403-420D-E4F5-554A-1F18-0324-84C5-42BB-D"};
	
	
	
		//debugger;
		//segmentAverageRequest = {"datasource":{"title":"Auto","id":"aLOCALHOST_aAUTO","address":"LocalHost","database":"aAuto"},"metadata":[{"jaql":{"table":"Stacked","column":"TheWave","dim":"[Stacked.TheWave]","datatype":"text","merged":true,"title":"WAVE"},"wpanel":"xAxis"},{"jaql":{"table":"Stacked","column":"SEGMENT","dim":"[Stacked.SEGMENT]","datatype":"text","merged":true,"title":"SEGMENT"},"format":{},"wpanel":"series"},{"jaql":{"type":"measure","formula":"sum([ECB6B-A0D]*[1475A-A78]) / ([AD95C-775],[1475A-A78])","context":{"[AD95C-775]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","agg":"sum","title":"Total WEIGHTI"},"[ECB6B-A0D]":{"table":"Stacked","column":"WEIGHTI","dim":"[Stacked.WEIGHTI]","datatype":"numeric","title":"WEIGHTI"},"[1475A-A78]":{"table":"Stacked","column":"FUN704","dim":"[Stacked.FUN704]","datatype":"numeric","title":"FUN704","filter":{"explicit":false,"multiSelection":true,"exclude":{"members":["N\\A"]}},"collapsed":false}},"title":"MEAN"},"format":{"mask":{"type":"number","abbreviations":{"t":true,"b":true,"m":true,"k":true},"separated":true,"decimals":"auto","isdefault":true},"color_bkp":{"color":"#00cee6","type":"color"}},"wpanel":"series"}],"count":20000,"offset":0,"isMaskedResult":true,"format":"json","widget":"5696fc3b41ec4480120000f9;","dashboard":"5696fbc541ec4480120000ef;SegAvgTest","queryGuid":"E2403-420D-E4F5-554A-1F18-0324-84C5-42BB-D"};
		console.log('segmentAverageRequest' + segmentAverageRequest)

		//debugger;
		var segAvgData;
		var data;
	   
		$.ajax({
			type: "POST",
			url: "../api/datasources/Auto/jaql",
			data: JSON.stringify(segmentAverageRequest),
			success: function (data) {
				segAvgData = data;
				console.log(data);
			},
			contentType: 'application/json',
			dataType: 'json',
			async: false
		});
		
		console.log(data)
		var excludedSegments = {}



			if ((segmentFilter.filter.members !== undefined) && segmentFilter.filter.members.length > 0) {
				console.log("One or More SELECTED")
						_.each(segmentFilter.filter.members, function (member) {
							var aSeg = {}
							_.each(filtSeg, function( fseg ) {
								var flg = 0
								var dpCount = 0;
								_.each(segAvgData.values, function( sd ) {
									if (sd[1].text == member) {
										if (fseg == sd[0].text) {
												aSeg[fseg] = [sd[0],sd[1],sd[2]]
												flg = 1
										} 
									};
									dpCount = dpCount + 1
								});
								if (flg == 0) {
									aSeg[fseg] = [{'data':fseg,'text':fseg},{'data':member,'text':member},{'data':null, 'text':null}]
								}
							});
							trueSegAvg[member] = aSeg
						});
			}


	var dpCount = 0;
  

		
		
		if (segmentFilter.filter.exclude !== undefined) {
			console.log("One or More EXCLUDED")
				_.each(segmentFilter.filter.exclude.members, function (exclude) {
					excludedSegments[exclude] = exclude
				});
			
				_.each(Object.keys(segmentVariables), function (sv) {					
					if (excludedSegments[sv] === undefined) {
						var aSeg = {}
						_.each(filtSeg, function( fseg ) {
							var flg = 0
							dpCount = 0
							_.each(segAvgData.values, function( sd ) {
								if (sd[1].text == sv) {
									if (fseg == sd[0].text) {
										aSeg[fseg] = [sd[0],sd[1],sd[2]]
										flg = 1
									}
								};
								dpCount = dpCount + 1
							});

							if (flg == 0) {
									aSeg[fseg] = [{'data':fseg,'text':fseg},{'data':sv,'text':sv},{'data':null, 'text':null}]
							}						
						});
						trueSegAvg[sv] = aSeg
					}
					
				});
		}
					   

		if ((segmentFilter.filter.members !== undefined && segmentFilter.filter.members.length == 0) || (segmentFilter.filter.all !== undefined)) {
			console.log("INCLUDE ALL")
				_.each(Object.keys(segmentVariables), function (sv) {	
					var aSeg = {}
					_.each(filtSeg, function( fseg ) {
						var flg = 0
						dpCount = 0
						_.each(segAvgData.values, function( sd ) {
							if (sd[1].text == sv) {
								if (fseg == sd[0].text) {
									aSeg[fseg] = [sd[0],sd[1],sd[2]]
									flg = 1
								}
							};
							dpCount = dpCount + 1
						});
						if (flg == 0) {
							aSeg[fseg] = [{'data':fseg,'text':fseg},{'data':sv,'text':sv},{'data':null, 'text':null}]
						}						
					});
					trueSegAvg[sv] = aSeg
				});
		}	
		
	console.log("trueSegAvg")
	console.log(trueSegAvg)
//****************************************************************************************************************************************		

		var colorList = ["#00FF00", "#494757", "#88869E", "#91D0CB", "#00FFFF", "#008BBC", "#00B0F0", "#C00000", "#FF0000", "#0E4CA1", "#0000FF", "#005539", "#2D7D01", "#5FAD4E", "#00AE7E", "#00B050", "#00FF00"]
		var colorCount = 0

		if (segmentFilter.filter.members !== undefined && segmentFilter.filter.members.length > 0) {
			console.log("ADD THE ONES CHOSEN")
//			debugger;
			if (segmentFilter.filter.members.length > 0) {
				colorCount = 0
				_.each(segmentFilter.filter.members, function (member) {
//					debugger;
					if (trueSegAvg[member] !== undefined) {
						e.result.series.push(JSON.parse(JSON.stringify(e.result.series[0])))
						var eachSeg;
						var eLen;
						eLen = e.result.series.length - 1
						eachSeg = e.result.series[eLen]
						eachSeg.color = colorList[colorCount]
						eachSeg.mask = e.result.series[0].mask
						segLen = eachSeg.data.length
						for (var i = 0 ; i < eachSeg.data.length ; i++) {
							if (eachSeg.data[i].selectionData !== undefined) {
								var thePoint = eachSeg.data[i].selectionData[0]
								if (trueSegAvg[member][thePoint] !== undefined) {
									eachSeg.name =  trueSegAvg[member][thePoint][1].text
									eachSeg.data[i].y = trueSegAvg[member][thePoint][2].data;
								} else {
									eachSeg.name =  member
									eachSeg.data[i].y = null
								}
							} else {
									debugger;
									eachSeg.data[i].selectionData = {0:thePoint}
									eachSeg.name =   trueSegAvg[member][thePoint][1].text
									eachSeg.data[i].y = trueSegAvg[member][thePoint][2].data;				
							}
						}
					}
					colorCount = colorCount + 1
				});
			}
		};


		if (segmentFilter.filter.exclude !== undefined) {
			console.log("ADD ALL BUT THOSE EXCLUDED")
			_.each(segmentFilter.filter.exclude.members, function (member) {
				excludedSegments[member] = member
			});
			colorCount = 0
			_.each(Object.keys(segmentVariables), function (sv) {
				if (trueSegAvg[sv] !== undefined) {
					if (excludedSegments[sv] === undefined) {
						e.result.series.push(JSON.parse(JSON.stringify(e.result.series[0])))
						var eachSeg;
						var eLen;
						eLen = e.result.series.length - 1

						eachSeg = e.result.series[eLen]
						eachSeg.color = colorList[colorCount]
						eachSeg.mask = e.result.series[0].mask
						segLen = eachSeg.data.length
						for (var i = 0 ; i < eachSeg.data.length ; i++) {
							if (eachSeg.data[i].selectionData !== undefined) {
								var thePoint = eachSeg.data[i].selectionData[0]
								if (trueSegAvg[sv][thePoint] !== undefined) {
									eachSeg.name =  trueSegAvg[sv][thePoint][1].text
									eachSeg.data[i].y = trueSegAvg[sv][thePoint][2].data;
								} else {
									eachSeg.name = sv
									eachSeg.data[i].y = null
								}
							} else {
								eachSeg.data[i].selectionData = {0:thePoint}
								eachSeg.name =   trueSegAvg[sv][thePoint][1].text
								eachSeg.data[i].y = trueSegAvg[sv][thePoint][2].data;	
							}
						}
					}
				colorCount = colorCount + 1
				};
			})
		};	



		if ((segmentFilter.filter.members !== undefined && segmentFilter.filter.members.length == 0) || (segmentFilter.filter.all !== undefined)) {		
			console.log("ADD ALL")
			colorCount = 0
			_.each(Object.keys(segmentVariables), function (sv) {
				if (trueSegAvg[sv] !== undefined) {
					e.result.series.push(JSON.parse(JSON.stringify(e.result.series[0])))
					var eachSeg;
					var eLen;
					eLen = e.result.series.length - 1
					eachSeg = e.result.series[eLen]
					eachSeg.color = colorList[colorCount]
					eachSeg.mask = e.result.series[0].mask
					segLen = eachSeg.data.length
					for (var i = 0 ; i < eachSeg.data.length ; i++) {
						if (eachSeg.data[i].selectionData !== undefined) {					
							var thePoint = eachSeg.data[i].selectionData[0]
							if (trueSegAvg[sv][thePoint] !== undefined) {
								eachSeg.name =  trueSegAvg[sv][thePoint][1].text
								eachSeg.data[i].y = trueSegAvg[sv][thePoint][2].data;
							} else {
								eachSeg.name = sv
								eachSeg.data[i].y = null
							}

						} else {
							eachSeg.data[i].selectionData = {0:thePoint}
							eachSeg.name =   trueSegAvg[sv][thePoint][1].text
							eachSeg.data[i].y = trueSegAvg[sv][thePoint][2].data;	
						}					
					}
					colorCount = colorCount + 1

				}
			});
		};
//	};	
	console.log(e.result.series)


//****************************************************************************************************************************************
	
	

	
});


