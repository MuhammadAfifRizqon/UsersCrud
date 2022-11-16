import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";


const router = new Router()

router.get('/',indexCtrl.usersCtrl.findAll)
router.get('/:id',indexCtrl.usersCtrl.findOne)
router.post('/',indexCtrl.usersCtrl.create)
router.put('/:id',indexCtrl.usersCtrl.update)
router.delete('/',indexCtrl.usersCtrl.deleted)

export default router