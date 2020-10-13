#!/usr/bin/env python
# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import json
import io

lista=open("products_urls.log").read().split("\n")

def getProductInfo(url):
	main_site="https://pl.openfoodfacts.org"
	page=requests.get(main_site+url)
	soup = BeautifulSoup(page.content, 'html.parser')
	produkt={}
	try:
		produkt["name"]=soup.find("h1",{"property":"food:name"}).text
	except:
		produkt["name"]=""
	produkt["code"]=url.split("/")[2]
	try:
		produkt["image"]=soup.find("img",{"class":"show-for-xlarge-up"})['src']
	except:
		produkt["name"]=""
	produkt["props"]={}
	for i in soup.find("div",{"class":"medium-12 large-8 xlarge-8 xxlarge-8 columns"}).findAll("p"):
		key=i.text[:i.text.find(":")]
		val=i.text[i.text.find(":")+2:]
		produkt["props"][key]=val
	return produkt
def getAllProducts():
	products={}
	prod_min=0
	prod_max=len(lista)-1
	for i in range(prod_min,prod_max):
		print("["+str(i)+"/"+str(len(lista)-1)+"] "+lista[i])
		product=getProductInfo(lista[i])
		products[product['code']]=product
	file=open('result.json',"w")
	file.write(json.dumps(products,indent=4, ensure_ascii=False).encode('utf8'))
	file.close()
		
getAllProducts()