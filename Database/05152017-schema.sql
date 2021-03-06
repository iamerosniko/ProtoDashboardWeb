USE [dbbtVulTstp1]
GO
/****** Object:  StoredProcedure [dbo].[WDSB_AppClient_VW]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  StoredProcedure [dbo].[WDSB_AppDetails_VW]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  StoredProcedure [dbo].[WDSB_AvailApp_VW]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  StoredProcedure [dbo].[WDSB_FavApp_VW]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[set_group]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[set_group_access]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[set_module]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[set_user]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[set_user_access]    Script Date: 5/15/2017 9:22:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[set_user_access](
	[user_id] [nvarchar](25) NULL,
	[grp_id] [nvarchar](25) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[WDSB_Applications]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_AppUsers]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_BUContacts]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_BusinessUnits]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_Comments]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_Favorites]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_Features]    Script Date: 5/15/2017 9:22:45 AM ******/
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
	[Function] [varchar](300) NOT NULL,
	[ScreenshotPath] [varchar](300) NOT NULL,
 CONSTRAINT [PK_WDSB_Features] PRIMARY KEY CLUSTERED 
(
	[FeatureID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[WDSB_Projects]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  Table [dbo].[WDSB_TempProjects]    Script Date: 5/15/2017 9:22:45 AM ******/
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
/****** Object:  View [dbo].[WDSB_VW_ApplicationsDB]    Script Date: 5/15/2017 9:22:45 AM ******/
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
