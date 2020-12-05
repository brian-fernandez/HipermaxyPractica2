-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2020 a las 18:03:13
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hipermaxidbs2`

CREATE DATABASE hipermaxidbs2;

USE hipermaxidbs2;
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(6) NOT NULL,
  `total` double NOT NULL,
  `id_productos` int(6) NOT NULL,
  `id_usuarios` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categorias` int(6) NOT NULL,
  `nombre` varchar(25) COLLATE dec8_bin NOT NULL,
  `descripcion` varchar(45) COLLATE dec8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(6) NOT NULL,
  `verificacion` varchar(10) COLLATE dec8_bin NOT NULL,
  `fecha_compra` date NOT NULL,
  `id_carrito` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `id_pago` int(6) NOT NULL,
  `tipo_de_tarjeta` varchar(25) COLLATE dec8_bin NOT NULL,
  `num_de_tarjeta` varchar(25) COLLATE dec8_bin NOT NULL,
  `nombre_propietario` varchar(25) COLLATE dec8_bin NOT NULL,
  `apellido_paterno` varchar(25) COLLATE dec8_bin NOT NULL,
  `apellido_materno` varchar(25) COLLATE dec8_bin NOT NULL,
  `cvc` varchar(30) COLLATE dec8_bin NOT NULL,
  `fecha_de_vencimiento` date NOT NULL,
  `id_usuarios` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

--
-- Volcado de datos para la tabla `pago`
--

INSERT INTO `pago` (`id_pago`, `tipo_de_tarjeta`, `num_de_tarjeta`, `nombre_propietario`, `apellido_paterno`, `apellido_materno`, `cvc`, `fecha_de_vencimiento`, `id_usuarios`) VALUES
(1, 'VIsa', '1243156342655', 'Brian', 'Fernandez', 'Mercado', '333', '1999-11-12', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` int(6) NOT NULL,
  `nombre` varchar(50) COLLATE dec8_bin NOT NULL,
  `precio` double NOT NULL,
  `foto` longblob NOT NULL,
  `id_subcategorias` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategorias`
--

CREATE TABLE `subcategorias` (
  `id_subcategorias` int(6) NOT NULL,
  `nombre` varchar(25) COLLATE dec8_bin NOT NULL,
  `descripcion` int(45) NOT NULL,
  `id_categorias` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(6) NOT NULL,
  `nombre` varchar(11) COLLATE dec8_bin NOT NULL,
  `apellido_paterno` varchar(25) COLLATE dec8_bin NOT NULL,
  `apellido_materno` varchar(25) COLLATE dec8_bin NOT NULL,
  `email` varchar(50) COLLATE dec8_bin NOT NULL,
  `password` varchar(10) COLLATE dec8_bin NOT NULL,
  `telefono` varchar(10) COLLATE dec8_bin NOT NULL,
  `direccion` varchar(50) COLLATE dec8_bin NOT NULL,
  `num_de_casa` varchar(10) COLLATE dec8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=dec8 COLLATE=dec8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `email`, `password`, `telefono`, `direccion`, `num_de_casa`) VALUES
(1, 'Brayansito', 'Fernandez', 'Mercado', 'brian@gmail.com', '123', '77435105', 'Avenida Petrolera km 3 1/2, Barrio universitario, ', '1234'),
(2, 'Claudia', 'prueba', 'prueba', 'claudia@gmail.com', '123', '69489025', 'Avenida Petrolera km 3 1/2, Barrio universitario, ', '0000'),
(3, 'prrueba', 'prueba', 'prueba', 'prueba@gmail.com', '123', '69445436', 'Avenida Petrolera km 3 1/2, Barrio universitario, ', '0000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `fk_foreign_id_productos` (`id_productos`),
  ADD KEY `fk_foreign_usuarios` (`id_usuarios`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categorias`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `fk_foreign_id_carrito` (`id_carrito`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `usuarios` (`id_usuarios`) USING BTREE;

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `fk_foreign_id_subcategoria` (`id_subcategorias`);

--
-- Indices de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD PRIMARY KEY (`id_subcategorias`),
  ADD KEY `fk_foreign_id_categorias` (`id_categorias`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categorias` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `id_pago` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
