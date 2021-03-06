USE [dbbtBTSSp1]
GO
/****** Object:  User [PRD\business technologies db users]    Script Date: 5/15/2017 9:31:08 AM ******/
CREATE USER [PRD\business technologies db users] FOR LOGIN [PRD\business technologies db users]
GO
/****** Object:  User [prd\g-ussas-rem-deploy]    Script Date: 5/15/2017 9:31:08 AM ******/
CREATE USER [prd\g-ussas-rem-deploy] FOR LOGIN [PRD\G-USSAS-REM-Deploy]
GO
/****** Object:  User [PRD\ltcbuld]    Script Date: 5/15/2017 9:31:08 AM ******/
CREATE USER [PRD\ltcbuld] FOR LOGIN [PRD\ltcbuld] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [PRD\SHR MNE1050 Dept Ops Business Tech - RWM]    Script Date: 5/15/2017 9:31:08 AM ******/
CREATE USER [PRD\SHR MNE1050 Dept Ops Business Tech - RWM] FOR LOGIN [PRD\SHR MNE1050 Dept Ops Business Tech - RWM]
GO
ALTER ROLE [db_owner] ADD MEMBER [PRD\business technologies db users]
GO
ALTER ROLE [db_owner] ADD MEMBER [prd\g-ussas-rem-deploy]
GO
ALTER ROLE [db_owner] ADD MEMBER [PRD\ltcbuld]
GO
ALTER ROLE [db_owner] ADD MEMBER [PRD\SHR MNE1050 Dept Ops Business Tech - RWM]
GO
