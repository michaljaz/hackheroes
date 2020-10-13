import requests
from bs4 import BeautifulSoup

min_page=1
max_page=231

def get_data_per_site(number):
	page=requests.get('https://pl.openfoodfacts.org/'+str(number))
	soup = BeautifulSoup(page.content, 'html.parser')
	lista=[]
	for i in soup.find("ul",{"class":"products"}).findAll("li"):
		lista.append(i.a['href'])
	return lista
def get_data():
	lista=[]
	for i in range(min_page,max_page+1):
		print("Parsing page number "+str(i)+"/"+str(max_page))
		lista_site=get_data_per_site(i)
		for j in lista_site:
			lista.append(j)
	return lista
def dump_data():
	f = open("products_urls.log", "w")
	data=get_data()
	stri=""
	for i in data:
		stri+=i+"\n"
	f.write(stri)
	f.close()
dump_data()