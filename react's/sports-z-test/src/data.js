const folderStructure =[
    {

    
    name:"root",
    isfolder:true,
    items:[
        {name:"public",
        isfolder:true,
        items:[
            {

                name:"indexfs",
                isfolder:true,
                items:[
                    {

                        name:"main.js",
                        isfolder:false
                    }

                ]
            },
            {
                name:"favicon",
                isfolder:false
            },
            {
                name:"readme.txt",
                isfoleder:false
            }

        ]
    },
        {name:"src",
        isfolder:true,
        items:[
            {

                name:"index.js",
                isfolder:false
            },
            {
                name:"app.js",
                isfolder:true
            },
            {
                name:"app.css",
                isfoleder:false
            }

        ]},
        {name:"pacakage.json",
        isfolder:false
    }
    ]
    },
    {
        name: "broCode",
        isfolder:false
    }
]

export default folderStructure;