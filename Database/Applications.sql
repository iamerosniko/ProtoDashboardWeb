declare 
@my_username as varchar(20) = 'alverer'
select 
	a.AppID,
	a.AppIsWeb,
	b.BUName,
	p1.FrontEndPath  as [DevFront1],
	p1.BackEndPath as [DevBack1]
	
from 
	WDSB_Applications a
left join 
	WDSB_Projects p1
	on a.ProjectOpsID = p1.ProjectID
left join 
	WDSB_BusinessUnits b
	on a.AppBU = b.BUID
	