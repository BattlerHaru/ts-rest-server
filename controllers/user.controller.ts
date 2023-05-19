import { Request, Response } from 'express';
import User from '../models/user.model';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json({
        msg: "getUsers",
        users
    })
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json({
            msg: "getUser",
            user
        })
    } else {
        res.status(404).json({
            msg: "getUser",
            error: "Usuario no encontrado"
        })
    }
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {

        const emailExists = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (emailExists) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email: ${body.email}`
            })
        }

        // const user = User(body);
        const user = await User.create(body);
        await user.save();
        res.status(201).json({
            msg: "postUser",
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: "Ha ocurrido un error",
            error
        })
    }
}
export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {


        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({
                msg: `No existe un usuario con ese ID: ${id}`
            })
        }

        await user.update(body);
        res.status(200).json({
            msg: "putUser",
            user
        })
    } catch (error) {
        res.status(500).json({
            msg: "Ha ocurrido un error",
            error
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con ese ID: ${id}`
        })
    }

    //Eliminación física
    // await user.destroy();

    //Eliminación lógica
    await user.update({
        status: false
    })

    res.json(user)

}