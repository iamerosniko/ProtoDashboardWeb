create view WDSB_VW_ApplicationsDB as
	select 
		a.AppID,
		a.AppIsWeb,
		b.BUName,
		p1.FrontEndPath as [DevFront1],
		p1.BackEndPath  as [DevBack1],
		p2.FrontEndPath  as [DevFront2],
		p2.BackEndPath as [DevBack2],
		p3.FrontEndPath  as [DevFront3],
		p3.BackEndPath as [DevBack3]
	from 
		WDSB_Applications a
	left join 
		WDSB_Projects p1
		on a.ProjectDevID = p1.ProjectID
	left join 
		WDSB_Projects p2
		on a.ProjectModID = p2.ProjectID
	left join 
		WDSB_Projects p3
		on a.ProjectOpsID = p3.ProjectID
	left join 
		WDSB_BusinessUnits b
		on a.AppBU = b.BUID

	go