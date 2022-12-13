"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrar = exports.entrar = exports.login = exports.register = exports.user = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Models
const User_1 = require("../models/User");
const user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusLogin = 0;
    res.render('pages/entrar', {
        statusLogin
    });
});
exports.user = user;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusLogin = 0;
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        let hasUser = yield User_1.User.findOne({ where: { email } });
        if (!hasUser) {
            let newUser = yield User_1.User.create({ email, password });
            const token = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
            res.status(201);
            res.json({ id: newUser.id, token });
        }
        else {
            res.json({ email: { msg: 'Email já existe' } });
        }
    }
    res.json({ error: 'email e/ou senha não prenchidos' });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;
        let user = yield User_1.User.findOne({ where: { email, password } });
        if (user) {
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
            res.json({ status: true, user, token });
            return;
        }
    }
    res.json({ status: false });
});
exports.login = login;
const entrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusLogin = 0;
    console.log(req.body);
    res.render('pages/entrar', {
        statusLogin
    });
});
exports.entrar = entrar;
const cadastrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusLogin = 0;
    res.render('pages/cadastrar', {
        statusLogin
    });
});
exports.cadastrar = cadastrar;
