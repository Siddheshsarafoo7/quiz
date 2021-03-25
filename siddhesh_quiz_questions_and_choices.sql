-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 25, 2021 at 03:55 AM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siddhesh_quiz questions and choices`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` bigint(20) NOT NULL,
  `quizId` bigint(20) NOT NULL,
  `questionId` tinyint(4) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `correct` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_question`
--

CREATE TABLE `quiz_question` (
  `id` bigint(100) NOT NULL,
  `QuizId` bigint(20) NOT NULL,
  `question` varchar(100) NOT NULL,
  `questionId` int(11) NOT NULL,
  `correct` int(11) NOT NULL,
  `choice` varchar(10) NOT NULL,
  `active` tinyint(10) NOT NULL,
  `level` smallint(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `takeAnswer`
--

CREATE TABLE `takeAnswer` (
  `id` bigint(20) NOT NULL,
  `takeId` bigint(20) NOT NULL,
  `answerId` tinyint(4) NOT NULL,
  `active` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz_question`
--
ALTER TABLE `quiz_question`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
