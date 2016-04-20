var mongoose = require('mongoose');

module.exports = {
    carddesign: {
        user: String, //the login user id
        
        cardJson: {
            fore: {
                block: { tagName: String },
                bgfile: String,
                saved: [{}]
            },
            back: {
                block: { tagName: String },
                bgfile: String,
                saved: [{}]
            }
        }, 
        logo: {
            fore: {
                file: String,
                x: Number,
                y: Number,
                width: Number,
                height: Number
            }, 
            back: {
                file: String,
                x: Number,
                y: Number,
                width: Number,
                height: Number
            }
        }, //url or base64data
        template: { objectId: String, designId: String }, //design id
        persons: [{}],
        company: {},
        
        
        order: String, // "" indicates not processed
        
        companyid: String, //company id
        users: [], //user id list
        
        meta: {
            createAt: {
                type: Date,
                default: Date.now()
            },
            updateAt: {
                type: Date,
                default: Date.now()
            }
        }
    },
    design: {
        designId: {
            type: String,
            unique: true
        },
        
        width: {
            type: Number,
            default: 1063 //90mm * 11.811 px/mm per std 300DPI
        },
        
        height: {
            type: Number,
            default: 638 //54mm * 11.811 px/mm per 300 DPI
        },
        
        shape: String, // 长方形，正方形，圆角长方形，异形
        material: String, // 荷兰白，蛋壳纸
        finish: String, // 表面处理：UV, 烫金
        feature: String, // 特点介绍
        sku: String,
        
        // Top
        file: String,
        
        logoX: Number,
        logoY: Number,
        logoWidth: Number,
        logoHeight: Number,
        
        QRCodeX: Number,
        QRCodeY: Number,
        QRCodeWidth: Number,
        QRCodeHeight: Number,
        
        fontColor: {
            type: String, //CMYK#
            default: "#33C2B" // black?
        },
        
        nameX: Number,
        nameY: Number,
        nameLength: Number,
        nameLines: Number,
        
        nameFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        nameFontSize: {
            type: Number,
            default: 14
        },
        
        mobileX: Number,
        mobileY: Number,
        mobileLength: Number,
        
        mobileFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        mobileFontSize: {
            type: Number,
            default: 6
        },
        
        titleX: Number,
        titleY: Number,
        titleLength: Number,
        titleLines: Number,
        
        titleFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        titleFontSize: {
            type: Number,
            default: 6
        },
        
        companyX: Number,
        companyY: Number,
        companyLength: Number,
        companyLines: Number,
        
        companyFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        companyFontSize: {
            type: Number,
            default: 12
        },
        
        companyFontColor: {
            type: String, // CMYK#
            default: "#332C2B" // black?
        },
        
        //Editable text box with default of:
        //tel: String,
        //mobile: String,
        //email: String,
        //cAddress: String,
        //website: String
        textX: Number,
        textY: Number,
        textLength: Number,
        textLines: Number,
        
        textFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        textFontSize: {
            type: Number,
            default: 6
        },
        
        // Bottom: prefix "e"
        eFile: String,
        
        eLogoX: Number,
        eLogoY: Number,
        eLogoWidth: Number,
        eLogoHeight: Number,
        
        eQRCodeX: Number,
        eQRCodeY: Number,
        eQRCodeWidth: Number,
        eQRCodeHeight: Number,
        
        eNameX: Number,
        eNameY: Number,
        eNameLength: Number,
        eNameLines: Number,
        
        eNameFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        eNameFontSize: {
            type: Number,
            default: 14
        },
        
        eMobileX: Number,
        eMobileY: Number,
        eMobileLength: Number,
        
        eMobileFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        eMobileFontSize: {
            type: Number,
            default: 6
        },
        
        eTitleX: Number,
        eTitleY: Number,
        eTitleLength: Number,
        eTitleLines: Number,
        
        eTitleFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        eTitleFontSize: {
            type: Number,
            default: 6
        },
        
        eCompanyX: Number,
        eCompanyY: Number,
        eCompanyLength: Number,
        eCompanyLines: Number,
        
        eCompanyFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        eCompanyFontSize: {
            type: Number,
            default: 12
        },
        
        eCompanyFontColor: {
            type: String, // CMYK#
            default: "#332C2B" // black?
        },
        
        //Editable text box with default of:
        //tel: String,
        //mobile: String,
        //email: String,
        //cAddress: String,
        //website: String
        eTextX: Number,
        eTextY: Number,
        eTextLength: Number,
        eTextLines: Number,
        
        eTextFont: {
            type: String,
            default: "Microsoft YaHei"
        },
        
        eTextFontSize: {
            type: Number,
            default: 6
        },
        
        //meta:
        createAt: {
            type: Date,
            default: Date.now()
        },
        
        updateAt: {
            type: Date,
            default: Date.now()
        }
    },
    company: {
        name: {
            unique: true,
            type: String
        },
        password: String,
        role: {
            type: String,
            default: "CompanyAdmin"
        },
        cname: String,
        ename: String,
        tel: String,
        fax: String,
        address: String,
        website: String,
        logo: Buffer,

        parent: {
            type: mongoose.Schema.Types.ObjectId,
            default: null
        },

        members: [mongoose.Schema.Types.ObjectId],

        meta: {
            createAt: {
                type: Date,
                default: Date.now()
            },
            updateAt: {
                type: Date,
                default: Date.now()
            }
        }
    }
};