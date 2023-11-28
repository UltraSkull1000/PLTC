import { useState, useEffect } from "react";
import Gallery from "./Gallery";
export default function Collection() {
  const cards = [
    {
      imageSrc: require("./cards/AFC Bournemouth/Adam Smith.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Alex Scott.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Antoine Semenyo.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Chris Mepham.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Dango Ouattara.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Darren Randolph.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/David Brooks.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Dominic Solanke.png"),
      rarity: "Rare",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Emiliano Marcondes.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Illia Zabarnyi.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Ionuț Andrei Radu.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Jaidon Anthony.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Jamal Lowe.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Joe Rothwell.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Justin Kluivert.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Kieffer Moore.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Lewis Cook.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Lloyd Kelly.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Luis Sinisterra.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Marcos Senesi.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Marcus Tavernier.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Max Aarons.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Milos Kerkez.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Neto.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Philip Billing.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Ryan Christie.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Ryan Fredericks.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Traorè.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/AFC Bournemouth/Tyler Adams.png"),
      rarity: "Common",
      team: "AFC Bournemouth",
    },
    {
      imageSrc: require("./cards/Arsenal/Aaron Ramsdale.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Albert Sambi Lokonga.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Ben White.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Bukayo Saka.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Cédric.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/David Raya Martin.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Declan Rice.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Eddie Nketiah.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Fábio Vieira.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Folarin Balogun.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Gabriel Jesus.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Gabriel Martinelli.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Gabriel.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Jakub Kiwior.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Jorginho.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Jurriën Timber.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Kai Havertz.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Leandro Trossard.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Martin Ødegaard.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Mohamed Elneny.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Nicolas Pépé.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Nuno Tavares.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Oleksandr Zinchenko.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Reiss Nelson.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Rob Holding.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Smith Rowe.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Takehiro Tomiyasu.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/Thomas Partey.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Arsenal/William Saliba.png"),
      rarity: "Common",
      team: "Arsenal",
    },
    {
      imageSrc: require("./cards/Aston Villa/Álex Moreno.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Bertrand Traoré.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Boubacar Kamara.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Calum Chambers.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Clément Lenglet.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Coutinho.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Diego Carlos.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Douglas Luiz.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Emiliano Buendía.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Emiliano Martínez.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Ezri Konsa.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Jacob Ramsey.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Jaden Philogene-Bidace.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/John McGinn.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Keinan Davis.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Kortney Hause.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Leander Dendoncker.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Leon Bailey.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Lucas Digne.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Matty Cash.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Moussa Diaby.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Nicolò Zaniolo.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Ollie Watkins.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Pau Torres.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Robin Olsen.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Tyrone Mings.png"),
      rarity: "Common",
      team: "Aston Villa",
    },
    {
      imageSrc: require("./cards/Aston Villa/Youri Tielemans.png"),
      rarity: "Common",
      team: "Aston Villa",
    },

    // Brentford
    {
      imageSrc: require("./cards/Brentford/Aaron Hickey.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Ben Mee.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Bryan Mbeumo.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Christian Nørgaard.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Ethan Pinnock.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Frank Onyeka.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Josh Dasilva.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Keane Lewis-Potter.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Kevin Schade.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Kristoffer Ajer.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Mads Roerslev.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Mark Flekken.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Mathias Jensen.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Mathias Jørgensen.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Mikkel Damsgaard.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Nathan Collins.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Rico Henry.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Shandon Baptiste.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Thomas Strakosha.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Vitaly Janelt.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brentford/Yoane Wissa.png"),
      rarity: "Common",
      team: "Brentford",
    },
    {
      imageSrc: require("./cards/Brighton/Adam Lallana.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Adam Webster.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Andi Zeqiri.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Anssumane Fati.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Bart Verbruggen.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Billy Gilmour.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Carlos Baleba.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Evan Ferguson.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Facundo Buonanotte.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Igor.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Jakub Moder.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/James Milner.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Jan Paul van Hecke.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Jason Steele.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/João Pedro.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Joël Veltman.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Julio César Enciso.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Kaoru Mitoma.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Lewis Dunk.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Mahmoud Dahoud.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Pascal Groß.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Pervis Estupiñán.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Simon Adingra.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Solly March.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Steven Alzate.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Brighton/Tariq Lamptey.png"),
      rarity: "Common",
      team: "Brighton",
    },
    {
      imageSrc: require("./cards/Burnley/Aaron Ramsey.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Ameen Al-Dakhil.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Anass Zaroury.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Arijanet Murić.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Benson Manuel.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Charlie Taylor.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Connor Roberts.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Dara O'Shea.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Darko Churlinov.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Hannes Delcroix.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Hjalmar Ekdal.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Jack Cork.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Jacob Bruun Larsen.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/James Trafford.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Jay Rodriguez.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Jordan Beyer.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Josh Brownhill.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Josh Cullen.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Lyle Foster.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Michael Obafemi.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Mike Trésor.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Nathan Redmond.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Samuel Bastien.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Sander Berge.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Victor da Silva.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Burnley/Zeki Amdouni.png"),
      rarity: "Common",
      team: "Burnley",
    },
    {
      imageSrc: require("./cards/Chelsea/Armando Broja.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Axel Disasi.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Ben Chilwell.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Benoît Badiashile.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Callum Hudson-Odoi.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Chalobah.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Christopher Nkunku.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Conor Gallagher.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Cucurella.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Đorđe Petrović.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Enzo Fernández.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Ian Maatsen.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Lesley Ugochukwu.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Levi Colwill.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Malang Sarr.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Malo Gusto.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Marcus Bettinelli.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Moisés Caicedo.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Mykhailo Mudryk.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Nicolas Jackson.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Noni Madueke.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Raheem Sterling.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Reece James.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Robert Sanchéz.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Romelu Lukaku.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Romeo Lavia.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Thiago Silva.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Chelsea/Wesley Fofana.png"),
      rarity: "Common",
      team: "Chelsea",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Cheick Doucouré.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Chris Richards.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Eberechi Eze.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Guaita.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jaïro Riedewald.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/James Tomkins.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jean-Philippe Mateta.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jefferson Lerma.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jeffrey Schlupp.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jesurun Rak-Sakyi.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Joachim Andersen.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Joel Ward.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Jordan Ayew.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Marc Guehi.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Michael Olise.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Naouirou Ahamada.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Nathaniel Clyne.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Odsonne Edouard.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Sam Johnstone.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Tyrick Mitchell.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Crystal Palace/Will Hughes.png"),
      rarity: "Common",
      team: "Crystal Palace",
    },
    {
      imageSrc: require("./cards/Everton/Abdoulaye Doucouré.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Amadou Onana.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/André Filipe Tavares Gomes.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Arnaut Danjuma.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Ben Godfrey.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Beto.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Dele Alli.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Demarai Gray.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Dominic Calvert-Lewin.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Dwight McNeil.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Idrissa Gueye.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Jack Harrison.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/James Garner.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/James Tarkowski.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Jarrad Branthwaite.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Jean-Philippe Gbamin.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Jordan Pickford.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Michael Keane.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Nathan Patterson.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Neal Maupay.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Séamus Coleman.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Thomas Cannon.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Vitaliy Mykolenko.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Everton/Youssef Chermiti.png"),
      rarity: "Common",
      team: "Everton",
    },
    {
      imageSrc: require("./cards/Fulham/Alex Iwobi.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Andreas Hugo Hoelgebaum Pereira.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Antonee Robinson.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Bernd Leno.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Bobby Decordova-Reid.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Calvin Bassey.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Carlos Vinícius Alves Morais.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Fodé Ballo-Touré.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Harrison Reed.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Harry Wilson.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Issa Diop.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Kenny Tete.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Kevin Mbabu.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Marek Rodák.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Palhinha.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Raúl Jiménez.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Rodrigo Muniz Carvalho.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Saša Lukić.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Terence Kongolo.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Tim Ream.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Timothy Castagne.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Tom Cairney.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Tosin Adarabioyo.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Fulham/Willian Borges da Silva.png"),
      rarity: "Common",
      team: "Fulham",
    },
    {
      imageSrc: require("./cards/Liverpool/Adrián.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Alexis Mac Allister.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Alisson.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Andrew Robertson.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Caoimhin Kelleher.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Cody Gakpo.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Conor Bradley.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Curtis Jones.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Darwin Núñez.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Diogo Jota.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Dominik Szoboszlai.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Harvey Elliott.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Ibrahima Konaté.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Joe Gomez.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Joel Matip.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Konstantinos Tsimikas.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Luis Díaz.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Mohamed Salah.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Nathaniel Phillips.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Ryan Gravenberch.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Stefan Bajcetic Maquieira.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Thiago.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Trent Alexander-Arnold.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Virgil van Dijk.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Liverpool/Wataru Endo.png"),
      rarity: "Common",
      team: "Liverpool",
    },
    {
      imageSrc: require("./cards/Luton Town/Alfie Doughty.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Allan Campbell.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Amari'i Bell.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Carlton Morris.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Cauley Woodrow.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Chiedozie Ogbene.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Elijah Adebayo.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Gabriel Osho.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Issa Kabore.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Jacob Brown.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Jordan Clark.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Luke Berry.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Mads Juel Andersen.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Marvelous Nakamba.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Pelly-Ruddock Mpanzu.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Reece Burke.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Ross Barkley.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Ryan Giles.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Tahith Chong.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Thomas Kaminski.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Tim Krul.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Luton Town/Tom Lockyer.png"),
      rarity: "Common",
      team: "Luton Town",
    },
    {
      imageSrc: require("./cards/Manchester City/Bernardo Silva.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Ederson.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Erling Haaland.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Jack Grealish.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/James McAtee.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Jérémy Doku.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/João Cancelo.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/John Stones.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Joško Gvardiol.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Julián Álvarez.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Kalvin Phillips.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Kevin De Bruyne.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Kyle Walker.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Manuel Akanji.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Mateo Kovacic.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Matheus Luiz Nunes.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Nathan Aké.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Phil Foden.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Rico Lewis.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Rodri.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Rúben Dias.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Sergio Gómez Martín.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Stefan Ortega.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Taylor Harwood-Bellis.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Tommy Doyle.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester City/Zack Steffen.png"),
      rarity: "Common",
      team: "Manchester City",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Aaron Wan-Bissaka.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Alejandro Garnacho Ferreyra.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Altay Bayındır.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Álvaro Fernández Carreras.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Amad Diallo.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/André Onana.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Anthony Martial.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Antony Matheus dos Santos.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Bruno Fernandes.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Casemiro.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Christian Eriksen.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Dean Henderson.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Diogo Dalot.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Donny van de Beek.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Eric Bailly.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Facundo Pellistri.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Harry Maguire.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Jadon Sancho.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Lisandro Martínez.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Luke Shaw.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Marcus Rashford.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Mason Mount.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Raphaël Varane.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Rasmus Højlund.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Reguilón.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Scott McTominay.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Sofyan Amrabat.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Tom Heaton.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Tyrell Malacia.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Manchester Utd/Victor Lindelöf.png"),
      rarity: "Common",
      team: "Manchester Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Alexander Isak.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Anthony Gordon.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Bruno Guimarães.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Callum Wilson.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Dan Burn.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Elliot Anderson.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Emil Krafth.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Fabian Schär.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Harvey Barnes.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Isaac Hayden.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Jacob Murphy.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Jamaal Lascelles.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Javier Manquillo Gaitán.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Jeff Hendrick.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Joelinton.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Joseph Willock.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Kieran Trippier.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Loris Karius.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Martin Dúbravka.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Matt Ritchie.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Matt Targett.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Miguel Almirón.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Nick Pope.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Paul Dummett.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Sandro Tonali.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Sean Longstaff.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Sven Botman.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
    {
      imageSrc: require("./cards/Newcastle Utd/Tino Livramento.png"),
      rarity: "Common",
      team: "Newcastle Utd",
    },
  ];
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    const fetchUserCards = async () => {
      try {
        const response = await fetch("{{baseUrl}}/user/:username/cards");
        if (response.ok) {
          const userCardsData = await response.json();
          setUserCards(userCardsData);
        } else {
          console.error("Failed to fetch user cards");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchUserCards();
  }, []);
  return (
    <>
      <div className="shadow-lg pt-3">
        <Gallery cards={userCards} />
      </div>
    </>
  );
}
