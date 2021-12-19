class Human:
    __name = None  # private
    __sex = None  # like 'null' in JS
    __age = None

    # constructor to initialize an object
    # self = this in JS
    def __init__(self, name, sex, age, height):
        self.__name = name
        self.__sex = sex
        self.__age = age
        self.height = height

    # setters

    def set_name(self, name):
        self.__name = name

    def set_sex(self, sex):
        self.__sex = sex

    def set_age(self, sex):
        self.__sex = sex

    # getters
    def get_name(self):
        return self.__name

    def get_sex(self):
        return str(self.__sex)

    def get_age(self):
        return str(self.__age)

    def get_type(self):
        print("Human")

    # method
    def toString(self):
        return "{} is {}, {} years old, {} cm".format(self.__name, self.__sex, self.__age, self.height)

# create an object
john = Human('John', 'male', 35, 180)

# print(john.toString())  # John is male, 35 years old
# print(john.height)  # 180
# print(john.get_age())  # 35
# print(john.__age) # object has no attribute '__age' # it is private
