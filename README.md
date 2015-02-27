#node-crowdin
Synchronize with crowdin your gettext based PO files.

## IMPORTANT
This module works with [node-translator](https://github.com/pablonazareno/node-translator). So when scaning src file to get translations keys, look for its functions names.

##Instalation
npm install -g node-crowding

##Configuration
Place a file named **crowding.json** in the root of your project with this information:
```javascript
{
	"projectId": "mercadolibre-xxx",
	"apiKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	"srcPath": "classes"
}
```
##Usage
###node-crowding create
- Scan src path for translations and create a new project file in crowding with one finded. 

###node-crowding download
- Download from crowding translation files, into **i18n** directiry.

###node-crowding upload [--merge]
- Scan src path for translation. if merge options is present download translations from crowding and merge both, and upload to crowding.

###node-crowding generate
- Localy scan src path for translations and generate keys file.
