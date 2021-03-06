USE [dbbtVulTstp1]
GO
/****** Object:  StoredProcedure [dbo].[WDSB_AppClient_VW]    Script Date: 5/11/2017 12:50:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE procedure [dbo].[WDSB_AppClient_VW]	
@myusername nvarchar(50)
as
	select 
		a.AppID,
		a.AppName,
		a.AppIsWeb,
		b.BUName,
		a.ProjectOpsID,
		p1.FrontEndPath as [DevFront],
		p2.FrontEndPath  as [ModFront],
		p3.FrontEndPath  as [OpsFront],
		a.IsUatAvail,
		a.AppIsActive,
		case when auOps.AppUserID is null then 0 else 1 end as [canProd],
		case when auMod.AppUserID is null then 0 else 1 end as [canMod],
		case when fav.FavID is null then CAST(0 AS BIT) else CAST(1 AS BIT) end as [myFav]
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
	left join 
		WDSB_AppUsers auOps
		on auOps.UserName=@myusername
		and auOps.ProjectID=a.ProjectOpsID
	left join 
		WDSB_AppUsers auMod
		on auMod.UserName=@myusername
		and auMod.ProjectID=a.ProjectModID
	left join WDSB_Favorites fav
		on fav.AppID=a.AppID
		and fav.IsActive=cast(1 as bit)





GO
/****** Object:  StoredProcedure [dbo].[WDSB_AvailApp_VW]    Script Date: 5/11/2017 12:50:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE procedure [dbo].[WDSB_AvailApp_VW]	
@myname nvarchar(50)
as
	select 
		a.AppID,
		a.AppName,
		a.AppIsWeb,
		b.BUName,
		a.ProjectOpsID,
		p1.FrontEndPath as [DevFront],
		p2.FrontEndPath  as [ModFront],
		p3.FrontEndPath  as [OpsFront],
		a.IsUatAvail,
		a.AppIsActive,
		case when auOps.AppUserID is null then 0 else 1 end as [canProd],
		case when auMod.AppUserID is null then 0 else 1 end as [canMod],
		case when fav.FavID is null then CAST(0 AS BIT) else CAST(1 AS BIT) end as [myFav]
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
	left join 
		WDSB_AppUsers auOps
		on auOps.UserName=@myname
		and auOps.ProjectID=a.ProjectOpsID
	left join 
		WDSB_AppUsers auMod
		on auMod.UserName=@myname
		and auMod.ProjectID=a.ProjectModID
	left join WDSB_Favorites fav
		on fav.AppID=a.AppID
		and fav.IsActive=cast(1 as bit)
	where auOps.AppUserID is not null




GO
/****** Object:  StoredProcedure [dbo].[WDSB_FavApp_VW]    Script Date: 5/11/2017 12:50:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE procedure [dbo].[WDSB_FavApp_VW]	
@myname nvarchar(50)
as
	select 
		a.AppID,
		a.AppName,
		a.AppIsWeb,
		b.BUName,
		a.ProjectOpsID,
		p1.FrontEndPath as [DevFront],
		p2.FrontEndPath  as [ModFront],
		p3.FrontEndPath  as [OpsFront],
		a.IsUatAvail,
		a.AppIsActive,
		case when auOps.AppUserID is null then 0 else 1 end as [canProd],
		case when auMod.AppUserID is null then 0 else 1 end as [canMod],
		case when fav.FavID is null then CAST(0 AS BIT) else CAST(1 AS BIT) end as [myFav]
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
	left join 
		WDSB_AppUsers auOps
		on auOps.UserName=@myname
		and auOps.ProjectID=a.ProjectOpsID
	left join 
		WDSB_AppUsers auMod
		on auMod.UserName=@myname
		and auMod.ProjectID=a.ProjectModID
	left join WDSB_Favorites fav
		on fav.AppID=a.AppID
		and fav.IsActive=cast(1 as bit)
	where 
		auOps.AppUserID is not null
		and fav.UserName=@myname




GO
