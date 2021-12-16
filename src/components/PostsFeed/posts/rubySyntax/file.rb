class Car
  @brand
  @model
  @topSpeed

  def initialize(brand, model, topSpeed)
    @brand = brand
    @model = model
    @topSpeed = topSpeed
  end

  def getBrand()
    p "Car brand is #{@brand}"
  end

end

car1 = Car.new("Tesla", "Model3", "220")
car1.getBrand()