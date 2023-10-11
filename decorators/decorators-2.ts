function RequireLogin(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    if (!this.isLoggedIn) {
      throw new Error("User not authenticated")
    } else {
      return originalMethod.apply(this, args)
    }
  }
}

function RequireRole(role: string) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      if (!this.user || this.user.role !== role) {
        throw new Error("Access Denied")
      } else {
        return originalMethod.apply(this, args)
      }
    }
  }
}

function AuditLog(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    const user = this.user
    const time = new Date()

    console.log({ user, time, method: propertyKey })

    return originalMethod.apply(this, args)
  }
}

class User {
  constructor(public username: string, public role: string) {}
}

class UserController {
  user: User | null = null
  isLoggedIn = false

  @RequireLogin
  @RequireRole("Admin")
  @AuditLog
  deleteUser() {
    console.log(`Deleted user: ${this.user?.username}`)
  }

  login(user: User) {
    this.user = user
    this.isLoggedIn = true
  }

  logout() {
    this.user = null
    this.isLoggedIn = false
  }
}

const userController = new UserController()

userController.deleteUser() // throw "User not authenticated"

userController.login(new User("zuckberg", "CEO"))

userController.deleteUser() // throw "Access Denied"

userController.logout()

userController.deleteUser() // throw "User not authenticated"
