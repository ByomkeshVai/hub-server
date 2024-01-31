import config from "../config"
import { User } from "../modules/user/user.model"

const superUser = {
    id: '0001',
    email: 'superadmin@gmail.com',
    password: config.super_admin_password,
    needsPasswordChange: false,
    passwordChangedAt: Date,
    role: 'super-admin',
    status: 'in-progress',
    isDeleted: false,
} 

const seedSuperAdmin =async () => {
    const isSuperAdminExist = await User.findOne({role: 'super-admin'})
    if(!isSuperAdminExist){
        User.create({superUser})
    }
}

export default seedSuperAdmin