p = {
	cup = "スピノカップ",
	hash = "ハックツハッカソン",
}

template = [[
【ハックツハッカソン~ $cup ~】
成果発表$iチーム目は、
チーム「$team」！
$url
#$hash
]]

io.input("team.txt")

line = io.read()
index = 1
while line do
	local team, url = line:match("^([^,]+),(.+)$")
	p.i = index
	p.team = team
	p.url = url

	-- テンプレートにpの値を埋め込んで表示
	local tweet = string.gsub(template, "%$(%w+)", p)
	print(tweet)
	index = index + 1
	line = io.read()
end
