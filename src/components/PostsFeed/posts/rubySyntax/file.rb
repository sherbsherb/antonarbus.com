File.open("file.txt") do |line|
  line.each do |item|
    p item
  end
end

