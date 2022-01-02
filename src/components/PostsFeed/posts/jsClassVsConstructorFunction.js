import { Lnk } from '../components/Lnk'
import { CodeOutput } from '../components/CodeOutput'
import { CodeSpan } from '../components/CodeSpan'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

export const jsClassVsConstructorFunction = {
  title: 'Class vs constructor function in JS',
  date: '2021.12.28',
  tagsArr: ['JavaScript', 'OOP'],
  postParts: [
    {
      val: <>Example is taken from the <Lnk path="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7">OOP lesson</Lnk>, which shows how classes are internally done in JavaScript by prototyping.</>,
    },
    {
      val: <H3>Class version</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let usersArr = []

      class User {
        constructor(email, name) {
          this.email = email
          this.name = name
          this.online = false
          usersArr.push(this)
        }

        login() {
          this.online = true
          console.log(this.email, 'has logged in')
        }

        logout() {
          this.online = false
          console.log(this.email, 'has logged out')
        }
      }

      class Admin extends User {
        constructor(email, name) {
          super(email, name)
          this.role = ''
        }
        deleteUser(u) {
          usersArr = usersArr.filter(user => user.email !== u.email)
          console.log(usersArr)
        }
      }

      const userOne = new User('john@mail.com', 'John')
      const userTwo = new User('bob@mail.com', 'Bob')
      const admin = new Admin('mike@mail.com', 'Mike')
      usersArr // [User, User, Admin]
      admin.deleteUser(userOne)
      usersArr // [User, Admin]
      `,
    },
    {
      val: <H3>Constructor function version</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let usersArr = []

      function User(email, name) {
        this.email = email
        this.name = name
        this.online = false
        usersArr.push(this)
      }

      User.prototype.login = function() {
        this.online = true
        console.log(this.email, 'has logged in')
      }
      User.prototype.logout = function() {
        this.online = false
        console.log(this.email, 'has logged out')
      }

      function Admin(...args) {
        User.apply(this, args)
        this.role = ''
      }

      Admin.prototype = Object.create(User.prototype)
      Admin.prototype.deleteUser = function(u) {
        usersArr = usersArr.filter(user => user.email !== u.email)
      }

      const userOne = new User('john@mail.com', 'John')
      const userTwo = new User('bob@mail.com', 'Bob')
      const admin = new Admin('mike@mail.com', 'Mike')
      usersArr // [User, User, Admin]
      admin.deleteUser(userOne)
      usersArr // [User, Admin]
      `,
    },
  ],
}
