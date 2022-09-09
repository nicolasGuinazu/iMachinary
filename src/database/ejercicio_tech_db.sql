-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2022 a las 18:29:13
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio_tech_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `createdAt`, `updatedAt`) VALUES
(1, 'Memento', '2010-10-04 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'The Big Lebowski', '2010-10-04 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Stalins death', '2010-10-04 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Inception', '2010-10-04 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `people`
--

INSERT INTO `people` (`id`, `name`, `last_name`, `age`, `createdAt`, `updatedAt`) VALUES
(1, 'Guy', 'Pearce', 54, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Steve', 'Buscemi', 64, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Cristopher', 'Nolan', 52, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_movie`
--

CREATE TABLE `person_movie` (
  `id` int(10) UNSIGNED NOT NULL,
  `person_id` int(10) NOT NULL,
  `movie_id` int(10) NOT NULL,
  `actor` int(1) DEFAULT NULL,
  `director` int(1) DEFAULT NULL,
  `producer` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `person_movie`
--

INSERT INTO `person_movie` (`id`, `person_id`, `movie_id`, `actor`, `director`, `producer`) VALUES
(149, 1, 1, 1, 0, 0),
(150, 2, 2, 0, 0, 1),
(151, 3, 1, 0, 1, 0),
(153, 2, 3, 1, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220908141458-create-movie.js'),
('20220908141833-create-person.js');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `person_movie`
--
ALTER TABLE `person_movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_movie_person_id_foreign` (`person_id`),
  ADD KEY `person_movie_movie_id_foreign` (`movie_id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `person_movie`
--
ALTER TABLE `person_movie`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `person_movie`
--
ALTER TABLE `person_movie`
  ADD CONSTRAINT `person_movie_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `person_movie_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
