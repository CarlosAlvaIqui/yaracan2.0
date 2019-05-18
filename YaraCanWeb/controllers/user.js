//importando el archivo user
const User = require('../models/user.js');

const Utils = require('../lib/utils');

const exposedFields = [
    'username',
    'password',
    'email'
];

module.exports = {
    signup: (req,res,next)=>{
        var user = new User({
            ...req.body
        });
        user
            .save()
            .then(result => {
                const token = Utils.generateToken({
                    _id: result['_doc']['_id'],
                    username: result['_doc']['username']
                });
                const exposedData = Utils.getCleanUser(result['_doc']);
                res.status(200).json({
                    message: 'El usuario se a logeado correctamente',
                    data: exposedData,
                    token: token
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
    },
    signin: (req,res,next)=>{
        User
            .findOne({username: req.body.username})
            .select(exposedFields.join(' ')+' password')
            .exec((err,user)=>{
                if(err) res.status(500).json(err);
                if(!user){
                    return res.status(401).json({
                        error:true,
                        message: 'Username o password esta incorrecto'
                    });
                }
                user.comparePassword(req.body.password)
                    .then(valid => {
                        if(!valid){
                            return res.status(401).json({
                                error:true,
                                message: 'Username o password Incorrecto'
                            });
                        }
                        res.json({
                            message: 'Usuario Logeado',
                            data: user,
                            token: Utils.generateToken(user)
                        });
                    })
                    .catch(err=> {
                        res.status(500).json(err);
                    });
            });
    },
    refreshToken: (req,res,next)=>{
        var token = req.body.token || req.query.token;
        if(!token){
            return res.status(401).json({message: 'Must pas token'})
        }

        Utils.verifyToken(token)
            .then(user => {
                User.findById({
                    '_id': user._id
                }, function(err,user){
                    if(err) throw err;

                    const exposedData = Utils.getCleanUser(User['_doc']);
                    const newToken = utils.generateToken(exposedData);

                    res.status(200).json({
                        user: exposedData,
                        token: newToken
                    });
                });
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    verifyToken:(req,res,next)=>{
        const token = req.headers['authorization'];
        if(!token) res.status(401).json({
            error:true,
            message: 'PLease registrer Log in using a valid email to submit posts'
        });
        Utils.verifyToken(token)
            .then(function(user){
                req.user = user;
                next();
            })
            .catch(function(err){
                console.log(err)
                res.status(500).json({
                    error:err
                });
            });
    },
    create: (req,res,next)=>{
        var user = new User({
            ...req.body
        });
        user
            .save()
            .then(result => {
                res.status(200).json({
                    message: 'Se creo correctamente el Usuario!',
                    data:{
                        ...result['_doc']
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
    },
    find: (req,res,next) => {
        User.find()
            .select(exposedFields.join(' '))
            .exec()
            .then(docs => {
                const response = {
                    count: docs.length,
                    data: docs.map(doc => {
                        return {
                            ...doc['_doc']
                        };
                    })
                };
                res.status(200).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    findOne: (req,res,next)=>{
        const id = req.params.id;
        User.findById(id)
            .exec()
            .then(doc => {
                if(doc){
                    res.status(200).json({
                        data: doc['_doc']
                    });
                }else{
                    res.status(404).json({message: 'No se ha encontrado ninguna entrada válida para la ID proporcionada'})
                }
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    update: (req,res,next) => {
        const id = req.params.id;
        let updateParams = {
            ...req.body
        };
        User.update({_id:id},{$set: updateParams})
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Usuario Actualizado!',
                    data: result['_doc']
                });
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    delete: (req,res,next) =>{
        const id = req.params.id;
        User.remove({_id: id})
            .exec()
            .then(result => {
                res.status(500).json({
                    error: err
                });
            });
    }
};
