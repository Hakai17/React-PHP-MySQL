-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/05/2023 às 21:40
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `scandiweb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(13,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `attribute` text NOT NULL,
  `attribute2` text NOT NULL,
  `attribute3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `type`, `attribute`, `attribute2`, `attribute3`) VALUES
(1, 'JVC200123', 'Acme DISC', 1.00, 'DVD', '700', '', ''),
(2, 'JVC200124', 'Acme DISC', 1.00, 'DVD', '700', '', ''),
(3, 'JVC200125', 'Acme DISC', 1.00, 'DVD', '700', '', ''),
(4, 'JVC200126', 'Acme DISC', 1.00, 'DVD', '700', '', ''),
(5, 'GGWP0007', 'War and Peace', 20.00, 'Book', '2', '', ''),
(8, 'GGWP0008', 'War and Peace', 20.00, 'Book', '2', '', ''),
(9, 'GGWP0009', 'War and Peace', 20.00, 'Book', '2', '', ''),
(10, 'GGWP0010', 'War and Peace', 20.00, 'Book', '2', '', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_sku` (`sku`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;