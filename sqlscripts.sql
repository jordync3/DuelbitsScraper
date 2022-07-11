CREATE DATABASE Duelbits;

GO

USE Duelbits;

USE [Duelbits]
GO

/****** Object:  Table [dbo].[AllBets]    Script Date: 7/11/2022 1:43:37 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AllBets](
[Game] [varchar](500) NULL,
[User] [varchar](500) NULL,
[Wager] [money] NULL,
[Multi] [varchar](500) NULL,
[Payout] [money] NULL,
[DateAdded] [datetime] NULL
) ON [PRIMARY]
GO

USE [Duelbits]
GO

/****** Object:  Table [dbo].[HighRollers]    Script Date: 7/11/2022 1:43:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HighRollers](
	[Game] [varchar](500) NULL,
	[User] [varchar](500) NULL,
	[Wager] [money] NULL,
	[Multi] [varchar](500) NULL,
	[Payout] [money] NULL,
	[DateAdded] [datetime] NULL
) ON [PRIMARY]
GO

USE [Duelbits]
GO

/****** Object:  Table [dbo].[LuckyWins]    Script Date: 7/11/2022 1:44:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[LuckyWins](
	[Game] [varchar](500) NULL,
	[User] [varchar](500) NULL,
	[Wager] [money] NULL,
	[Multi] [varchar](500) NULL,
	[Payout] [money] NULL,
	[DateAdded] [datetime] NULL
) ON [PRIMARY]
GO

USE [Duelbits]
GO

/****** Object:  Table [dbo].[ui_dashboards]    Script Date: 7/11/2022 2:33:34 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ui_dashboards](
	[dashboard] [varchar](250) NULL,
	[title] [varchar](250) NULL,
	[description] [varchar](500) NULL
) ON [PRIMARY]
GO

  INSERT INTO ui_dashboards VALUES ('animalprofile','Animal Profile','Look up an animal from the shelterLuv API.');

GO

   INSERT INTO ui_dashboards VALUES ('shelterluv','ShelterLuv','Dashboard for users to look up information from the ShelterLuv API. ');