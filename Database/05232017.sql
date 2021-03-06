USE [dbbtWEBD]
GO
/****** Object:  StoredProcedure [dbo].[WDSB_AppClient_VW]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE procedure [dbo].[WDSB_AppClient_VW]	
@myusername nvarchar(50),
@appName nvarchar(100)
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
	where a.AppName like '%'+@appName+'%'






GO
/****** Object:  StoredProcedure [dbo].[WDSB_AppDetails_VW]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





CREATE procedure [dbo].[WDSB_AppDetails_VW]	
@myusername nvarchar(50),
@appID int
as
	select 
		a.*,
		b.BUName,
		bc1.FirstName + ' ' + bc1.LastName as [buContact1],
		bc2.FirstName + ' ' + bc2.LastName as [buContact2],
		p1.FrontEndPath as [DevFront],
		p2.FrontEndPath  as [ModFront],
		p3.FrontEndPath  as [OpsFront],
		case when auOps.AppUserID is null then 0 else 1 end as [canProd],
		case when auMod.AppUserID is null then 0 else 1 end as [canMod],
		case when fav.FavID is null then CAST(0 AS BIT) else CAST(1 AS BIT) end as [myFav]
	from 
		WDSB_Applications a
	left join WDSB_BUContacts bc1
		on a.PrimaryBUContact=bc1.ContactID
	left join WDSB_BUContacts bc2
		on a.SecondaryBUContact=bc2.ContactID
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
	where a.AppID=@appID







GO
/****** Object:  StoredProcedure [dbo].[WDSB_AvailApp_VW]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE procedure [dbo].[WDSB_AvailApp_VW]	
@myname nvarchar(50),
@appName nvarchar(100)
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
	and a.AppName  like '%'+@appName+'%'






GO
/****** Object:  StoredProcedure [dbo].[WDSB_FavApp_VW]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE procedure [dbo].[WDSB_FavApp_VW]	
@myname nvarchar(50),
@appName nvarchar(100)
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
		 fav.UserName=@myname
		and a.AppName  like '%'+@appName+'%'






GO
/****** Object:  StoredProcedure [dbo].[WDSB_GetAuth]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[WDSB_GetAuth]
@username varchar(15),
@moduleName varchar(25)
as begin
	select 
		su.[user_name] as [UserName],
		sg.grp_name as [Group],
		sm.mod_name as [Module],
		sga.can_add as [CanAdd],
		sga.can_delete  as [CanDelete],
		sga.can_edit  as [CanEdit],
		sga.can_view  as [CanView]
	from
		set_user su
	left join
		set_user_access sua
		on sua.[user_id]=su.[user_id]
	left join
		set_group sg
		on sg.grp_id=sua.grp_id
	left join
		set_group_access sga
		on sg.grp_id=sga.grp_id
	left join
		set_module sm
		on sm.mod_id=sga.mod_id
	where su.[user_name]=@username
	and sm.mod_name=@moduleName
end
GO
/****** Object:  Table [dbo].[set_group]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_group](
	[grp_id] [nvarchar](25) NOT NULL,
	[grp_name] [nvarchar](50) NULL,
	[grp_desc] [nvarchar](255) NULL,
	[created_date] [datetime] NULL CONSTRAINT [DF_set_group_created_date]  DEFAULT (getdate()),
 CONSTRAINT [aaaaaset_group_PK] PRIMARY KEY NONCLUSTERED 
(
	[grp_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[set_group_access]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_group_access](
	[grp_id] [nvarchar](25) NULL,
	[mod_id] [nvarchar](25) NULL,
	[can_view] [bit] NULL DEFAULT ((0)),
	[can_add] [bit] NULL DEFAULT ((0)),
	[can_edit] [bit] NULL DEFAULT ((0)),
	[can_delete] [bit] NULL DEFAULT ((0))
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[set_module]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_module](
	[mod_id] [nvarchar](25) NOT NULL,
	[mod_name] [nvarchar](50) NULL,
	[mod_desc] [nvarchar](255) NULL,
	[created_date] [datetime] NULL CONSTRAINT [DF_set_module_created_date]  DEFAULT (getdate()),
 CONSTRAINT [aaaaaset_module_PK] PRIMARY KEY NONCLUSTERED 
(
	[mod_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[set_user]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_user](
	[user_id] [nvarchar](25) NOT NULL,
	[user_name] [nvarchar](25) NULL,
	[user_last_name] [nvarchar](50) NULL,
	[user_first_name] [nvarchar](50) NULL,
	[user_middle_name] [nvarchar](50) NULL,
	[can_PROD] [bit] NULL DEFAULT ((0)),
	[can_UAT] [bit] NULL DEFAULT ((0)),
	[can_PEER] [bit] NULL DEFAULT ((0)),
	[can_DEV] [bit] NULL DEFAULT ((0)),
	[created_date] [datetime] NULL CONSTRAINT [DF_set_user_created_date]  DEFAULT (getdate()),
 CONSTRAINT [aaaaaset_user_PK] PRIMARY KEY NONCLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[set_user_access]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_user_access](
	[user_id] [nvarchar](25) NULL,
	[grp_id] [nvarchar](25) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[WDSB_Applications]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_Applications](
	[AppID] [int] IDENTITY(1,1) NOT NULL,
	[AppName] [varchar](150) NULL,
	[AppBU] [int] NOT NULL,
	[FrontTechnology] [varchar](50) NULL,
	[BackTechnology] [varchar](50) NULL,
	[AppLifespan] [int] NULL,
	[PrimaryBUContact] [int] NOT NULL,
	[SecondaryBUContact] [int] NULL,
	[AppIsActive] [bit] NULL,
	[AppPII] [bit] NULL,
	[AppSecurity] [varchar](50) NULL,
	[DateImplemented] [datetime2](7) NULL,
	[LastProdDate] [datetime2](7) NULL,
	[AppVersion] [varchar](10) NULL,
	[AppDesc] [varchar](100) NULL,
	[AppIsWeb] [bit] NULL,
	[ProjectDevID] [varchar](50) NULL,
	[ProjectModID] [varchar](50) NULL,
	[ProjectOpsID] [varchar](50) NULL,
	[AppIconPath] [varchar](250) NULL,
	[IsUatAvail] [bit] NULL,
 CONSTRAINT [PK_WDSB_Applications] PRIMARY KEY CLUSTERED 
(
	[AppID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_AppUsers]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_AppUsers](
	[AppUserID] [uniqueidentifier] NOT NULL,
	[ProjectID] [varchar](50) NOT NULL,
	[UserName] [varchar](20) NULL,
 CONSTRAINT [PK_WDSB_AppUsers] PRIMARY KEY CLUSTERED 
(
	[AppUserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_BUContacts]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_BUContacts](
	[ContactID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[MiddleName] [varchar](50) NULL,
	[LastName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_WDSB_BUContacts] PRIMARY KEY CLUSTERED 
(
	[ContactID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_BusinessUnits]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_BusinessUnits](
	[BUID] [int] IDENTITY(1,1) NOT NULL,
	[BUName] [varchar](100) NOT NULL,
 CONSTRAINT [PK_WDSB_BusinessUnits] PRIMARY KEY CLUSTERED 
(
	[BUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Comments]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_Comments](
	[CommentID] [int] IDENTITY(1,1) NOT NULL,
	[AppID] [int] NOT NULL,
	[Comment] [varchar](300) NOT NULL,
	[UserName] [varchar](15) NOT NULL,
	[DatePosted] [datetime2](7) NOT NULL,
	[Subject] [varchar](25) NULL,
 CONSTRAINT [PK_WDSB_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Favorites]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_Favorites](
	[FavID] [int] IDENTITY(1,1) NOT NULL,
	[AppID] [int] NOT NULL,
	[UserName] [varchar](15) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_WDSB_Favorites] PRIMARY KEY CLUSTERED 
(
	[FavID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Features]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_Features](
	[FeatureID] [int] IDENTITY(1,1) NOT NULL,
	[AppID] [int] NOT NULL,
	[Description] [varchar](300) NOT NULL,
	[FeatFunction] [varchar](300) NOT NULL,
	[ScreenshotPath] [varchar](300) NOT NULL,
 CONSTRAINT [PK_WDSB_Features] PRIMARY KEY CLUSTERED 
(
	[FeatureID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Projects]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
CREATE TABLE [dbo].[WDSB_Projects](
	[ProjectID] [varchar](50) NOT NULL,
	[ProjectName] [varchar](150) NULL,
	[ProjectDatasource] [varchar](50) NULL,
	[ProjectDatabaseName] [varchar](50) NULL,
	[ProjectUserID] [varchar](25) NULL,
	[ProjectPassword] [varchar](25) NULL,
	[ProjectIsActive] [bit] NULL
) ON [PRIMARY]
SET ANSI_PADDING ON
ALTER TABLE [dbo].[WDSB_Projects] ADD [FrontEndPath] [varchar](250) NULL
ALTER TABLE [dbo].[WDSB_Projects] ADD [BackEndPath] [varchar](250) NULL
 CONSTRAINT [PK_WDSB_Projects] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Ratings]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[WDSB_Ratings](
	[RatingID] [int] IDENTITY(1,1) NOT NULL,
	[AppID] [int] NOT NULL,
	[UserName] [varchar](300) NOT NULL,
	[Rating] [int] NOT NULL,
 CONSTRAINT [PK_WDSB_Ratings] PRIMARY KEY CLUSTERED 
(
	[RatingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_TempProjects]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
CREATE TABLE [dbo].[WDSB_TempProjects](
	[ProjectID] [varchar](50) NOT NULL,
	[ProjectName] [varchar](150) NULL,
	[ProjectDatasource] [varchar](50) NULL,
	[ProjectDatabaseName] [varchar](50) NULL,
	[ProjectUserID] [varchar](25) NULL,
	[ProjectPassword] [varchar](25) NULL,
	[ProjectIsActive] [bit] NULL,
 CONSTRAINT [PK_WDSB_TempProjects] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[VW_WDSB_GetNewApp]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE VIEW [dbo].[VW_WDSB_GetNewApp]
AS
SELECT     X.ProjectID, X.ProjectName,
		   X.ProjectDatasource, X.ProjectDatabaseName, 
		   X.ProjectUserID , X.ProjectPassword, X.ProjectIsActive,
		   Y.FrontEndPath, Y.BackEndPath
FROM         dbo.WDSB_Projects AS Y RIGHT OUTER JOIN
                      dbo.WDSB_TempProjects AS X ON Y.ProjectID = X.ProjectID
WHERE     (Y.ProjectID IS NULL)





GO
/****** Object:  View [dbo].[WDSB_AppAvgRating_VW]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[WDSB_AppAvgRating_VW]
as 
select AppID, Avg(Rating) as [AvgRating]
from WDSB_Ratings
group by AppID

GO
/****** Object:  View [dbo].[WDSB_VW_ApplicationsDB]    Script Date: 5/23/2017 4:26:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE view [dbo].[WDSB_VW_ApplicationsDB] as
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
		a.AppIsActive
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





GO
ALTER TABLE [dbo].[set_group_access]  WITH CHECK ADD  CONSTRAINT [FK_set_group_access_set_group] FOREIGN KEY([grp_id])
REFERENCES [dbo].[set_group] ([grp_id])
GO
ALTER TABLE [dbo].[set_group_access] CHECK CONSTRAINT [FK_set_group_access_set_group]
GO
ALTER TABLE [dbo].[set_group_access]  WITH CHECK ADD  CONSTRAINT [FK_set_group_access_set_module] FOREIGN KEY([mod_id])
REFERENCES [dbo].[set_module] ([mod_id])
GO
ALTER TABLE [dbo].[set_group_access] CHECK CONSTRAINT [FK_set_group_access_set_module]
GO
ALTER TABLE [dbo].[set_user_access]  WITH CHECK ADD  CONSTRAINT [FK_set_user_access_set_group] FOREIGN KEY([grp_id])
REFERENCES [dbo].[set_group] ([grp_id])
GO
ALTER TABLE [dbo].[set_user_access] CHECK CONSTRAINT [FK_set_user_access_set_group]
GO
ALTER TABLE [dbo].[set_user_access]  WITH CHECK ADD  CONSTRAINT [FK_set_user_access_set_user] FOREIGN KEY([user_id])
REFERENCES [dbo].[set_user] ([user_id])
GO
ALTER TABLE [dbo].[set_user_access] CHECK CONSTRAINT [FK_set_user_access_set_user]
GO
ALTER TABLE [dbo].[WDSB_Applications]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Applications_WDSB_BUContacts] FOREIGN KEY([PrimaryBUContact])
REFERENCES [dbo].[WDSB_BUContacts] ([ContactID])
GO
ALTER TABLE [dbo].[WDSB_Applications] CHECK CONSTRAINT [FK_WDSB_Applications_WDSB_BUContacts]
GO
ALTER TABLE [dbo].[WDSB_Applications]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Applications_WDSB_BUContacts1] FOREIGN KEY([SecondaryBUContact])
REFERENCES [dbo].[WDSB_BUContacts] ([ContactID])
GO
ALTER TABLE [dbo].[WDSB_Applications] CHECK CONSTRAINT [FK_WDSB_Applications_WDSB_BUContacts1]
GO
ALTER TABLE [dbo].[WDSB_Applications]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Applications_WDSB_BusinessUnits] FOREIGN KEY([AppBU])
REFERENCES [dbo].[WDSB_BusinessUnits] ([BUID])
GO
ALTER TABLE [dbo].[WDSB_Applications] CHECK CONSTRAINT [FK_WDSB_Applications_WDSB_BusinessUnits]
GO
ALTER TABLE [dbo].[WDSB_AppUsers]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_AppUsers_WDSB_Projects] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[WDSB_Projects] ([ProjectID])
GO
ALTER TABLE [dbo].[WDSB_AppUsers] CHECK CONSTRAINT [FK_WDSB_AppUsers_WDSB_Projects]
GO
ALTER TABLE [dbo].[WDSB_Comments]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Comments_WDSB_Applications] FOREIGN KEY([AppID])
REFERENCES [dbo].[WDSB_Applications] ([AppID])
GO
ALTER TABLE [dbo].[WDSB_Comments] CHECK CONSTRAINT [FK_WDSB_Comments_WDSB_Applications]
GO
ALTER TABLE [dbo].[WDSB_Favorites]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Favorites_WDSB_Applications] FOREIGN KEY([AppID])
REFERENCES [dbo].[WDSB_Applications] ([AppID])
GO
ALTER TABLE [dbo].[WDSB_Favorites] CHECK CONSTRAINT [FK_WDSB_Favorites_WDSB_Applications]
GO
ALTER TABLE [dbo].[WDSB_Features]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Features_WDSB_Applications] FOREIGN KEY([AppID])
REFERENCES [dbo].[WDSB_Applications] ([AppID])
GO
ALTER TABLE [dbo].[WDSB_Features] CHECK CONSTRAINT [FK_WDSB_Features_WDSB_Applications]
GO
ALTER TABLE [dbo].[WDSB_Ratings]  WITH CHECK ADD  CONSTRAINT [FK_WDSB_Ratings_WDSB_Applications] FOREIGN KEY([AppID])
REFERENCES [dbo].[WDSB_Applications] ([AppID])
GO
ALTER TABLE [dbo].[WDSB_Ratings] CHECK CONSTRAINT [FK_WDSB_Ratings_WDSB_Applications]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "X"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 114
               Right = 225
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Y"
            Begin Extent = 
               Top = 6
               Left = 263
               Bottom = 114
               Right = 450
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VW_WDSB_GetNewApp'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VW_WDSB_GetNewApp'
GO
