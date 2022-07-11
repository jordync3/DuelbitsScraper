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

