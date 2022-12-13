"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//controllers
const homeController_1 = require("../controllers/homeController");
const router = (0, express_1.Router)();
router.get('/', homeController_1.home);
router.get('/account', (req, res) => {
    res.render("pages/account");
});
router.get('/account/dados-pessoais', (req, res) => {
    res.render("pages/dados-pessoais");
});
router.get('/account/financas', (req, res) => {
    res.render("pages/financas");
});
router.get('/account/promocoes', (req, res) => {
    res.render("pages/promocoes");
});
router.get('/account/configuracoes', (req, res) => {
    res.render("pages/configuracoes");
});
router.get('/account/help-info', (req, res) => {
    res.render("pages/help-info");
});
router.get('/account/minhas-apostas', (req, res) => {
    res.render("pages/minhas-apostas");
});
router.get('/eventos-ao-vivo', (req, res) => {
    res.render("pages/eventos-aovivo");
});
exports.default = router;
