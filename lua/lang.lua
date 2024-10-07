x = 10

if x > 5 then
	print("x is greater than 5")
end

function hoge()
	print("hoge")
end

hoge()

array = { 1, 2, 3, 4, 5 }

for i = 1, #array do
	print(array[i])
end

for key, value in pairs(array) do
	print(key, value)
end

scores = { yamada = 80, tanaka = 70, suzuki = 90 }

for key, value in pairs(scores) do
	print(key, value)
end

io.input("input.txt")
line = io.read()
while line do
	print(line)
	line = io.read()
end

-- グローバル変数は_ENVテーブルに格納されている
print(_ENV)

-- assert(nil)
