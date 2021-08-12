require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genders } = require('../db');
const { v4: uuidv4 } = require('uuid');
const router = Router();

