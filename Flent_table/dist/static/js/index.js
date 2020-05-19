/**
 * Created by haiping on 2018/10/09.
 */

var vm = new Vue({
    el: "#floor-panel",
    data: {
        trList: [
            { "dis": false, "name": "營業收入", "else": "", "formula": "A", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": false, "name": "營業成本", "else": "", "formula": "B", "pre0": 61.54, "pre5": "61.54", "pre10": "61.54" },
            { "dis": true,  "name": "營業毛利", "else": "", "formula": "C=A-B", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": true,  "name": "管理費用", "else": "", "formula": "D", "pre0": 0, "pre5": "", "pre10": "" },
            { "name": "管理費用-薪資", "else": "", "formula": "D1", "pre0": 4.72, "pre5": "4.72", "pre10": "4.72" },
            { "dis": true,"name": "管理費用-其他", "else": "", "formula": "D2=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": true,"name": "管理費用-文武周邊", "else": "", "formula": "D3=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": true,"name": "銷售費用", "else": "", "formula": "E", "pre0": 0, "pre5": "", "pre10": "" },
            { "name": "銷售費用-薪資", "else": "", "formula": "E1", "pre0": 2.34, "pre5": "2.34", "pre10": "2.34" },
            { "dis": true,"name": "銷售費用-其他", "else": "", "formula": "E2=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": true,"name": "銷售費用-物流", "else": "", "formula": "E3", "pre0": 0, "pre5": "", "pre10": "" },
            { "name": "銷售費用", "else": "台灣包材費", "formula": "E3a", "pre0": 4.40, "pre5": "4.40", "pre10": "4.40" },
            { "name": "銷售費用", "else": "台灣搬運費", "formula": "E3b", "pre0": 2.20, "pre5": "2.20", "pre10": "2.20" },
            { "name": "銷售費用", "else": "台灣装柜费費", "formula": "E3c", "pre0": 2.20, "pre5": "2.20", "pre10": "2.20" },
            { "name": "銷售費用", "else": "台灣港口拖车物流费", "formula": "E3d", "pre0": 0.78, "pre5": "0.78", "pre10": "0.78" },
            { "name": "銷售費用", "else": "台灣报关检测费", "formula": "E3e", "pre0": 0.59, "pre5": "0.59", "pre10": "0.59" },
            { "name": "銷售費用", "else": "大陸海运费", "formula": "E3f", "pre0": 5.06, "pre5": "5.06", "pre10": "5.06" },
            { "name": "銷售費用", "else": "大陸报检报关费", "formula": "E3g", "pre0": 0.30, "pre5": "0.30", "pre10": "0.30" },
            { "name": "銷售費用", "else": "大陸港杂装卸费", "formula": "E3h", "pre0": 0.89, "pre5": "0.89", "pre10": "0.89" },
            { "name": "銷售費用", "else": "大陸市场二次卸装费", "formula": "E3i", "pre0": 0.71, "pre5": "0.71", "pre10": "0.71" },
            { "name": "銷售費用", "else": "港口-內地城市(以深圳為例)", "formula": "E3j", "pre0": 3.27, "pre5": "3.27", "pre10": "3.27" },
            { "dis": true,"name": "銷售費用", "else": "快遞及倉儲", "formula": "E3k=A*30%", "pre0": 0, "pre5": "", "pre10": "" },
            { "dis": true,"name": "銷售費用-耗損", "else": "水果報廢(30%)", "formula": "E4=B*30%", "pre0": 18.46, "pre5": "18.46", "pre10": "18.46" },
            { "dis": true,"name": "税前净利", "else": "", "formula": "F=C-D-E", "pre0": 0, "pre5": "", "pre10": "" },
        ],
        tr1:{ "dis": false, "name": "營業收入", "else": "", "formula": "A", "pre0": 0, "pre5": "", "pre10": "" },
        tr2:{ "dis": false, "name": "營業成本", "else": "", "formula": "B", "pre0": 61.54, "pre5": "61.54", "pre10": "61.54" },
        tr3:{ "dis": true,  "name": "營業毛利", "else": "", "formula": "C=A-B", "pre0": 0, "pre5": "", "pre10": "" },
        tr4:{ "dis": true,  "name": "管理費用", "else": "", "formula": "D", "pre0": 0, "pre5": "", "pre10": "" },
        tr5:{ "name": "管理費用-薪資", "else": "", "formula": "D1", "pre0": 4.72, "pre5": "4.72", "pre10": "4.72" },
        tr6:{ "dis": true,"name": "管理費用-其他", "else": "", "formula": "D2=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
        tr7:{ "dis": true,"name": "管理費用-文武周邊", "else": "", "formula": "D3=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
        tr8:{ "dis": true,"name": "銷售費用", "else": "", "formula": "E", "pre0": 0, "pre5": "", "pre10": "" },
        tr9:{ "name": "銷售費用-薪資", "else": "", "formula": "E1", "pre0": 2.34, "pre5": "2.34", "pre10": "2.34" },
        tr10:{ "dis": true,"name": "銷售費用-其他", "else": "", "formula": "E2=A*5%", "pre0": 0, "pre5": "", "pre10": "" },
        tr11:{ "dis": true,"name": "銷售費用-物流", "else": "", "formula": "E3", "pre0": 0, "pre5": "", "pre10": "" },
        tr12:{ "name": "銷售費用", "else": "台灣包材費", "formula": "E3a", "pre0": 4.40, "pre5": "4.40", "pre10": "4.40" },
        tr13:{ "name": "銷售費用", "else": "台灣搬運費", "formula": "E3b", "pre0": 2.20, "pre5": "2.20", "pre10": "2.20" },
        tr14:{ "name": "銷售費用", "else": "台灣装柜费費", "formula": "E3c", "pre0": 2.20, "pre5": "2.20", "pre10": "2.20" },
        tr15:{ "name": "銷售費用", "else": "台灣港口拖车物流费", "formula": "E3d", "pre0": 0.78, "pre5": "0.78", "pre10": "0.78" },
        tr16:{ "name": "銷售費用", "else": "台灣报关检测费", "formula": "E3e", "pre0": 0.59, "pre5": "0.59", "pre10": "0.59" },
        tr17:{ "name": "銷售費用", "else": "大陸海运费", "formula": "E3f", "pre0": 5.06, "pre5": "5.06", "pre10": "5.06" },
        tr18:{ "name": "銷售費用", "else": "大陸报检报关费", "formula": "E3g", "pre0": 0.30, "pre5": "0.30", "pre10": "0.30" },
        tr19:{ "name": "銷售費用", "else": "大陸港杂装卸费", "formula": "E3h", "pre0": 0.89, "pre5": "0.89", "pre10": "0.89" },
        tr20:{ "name": "銷售費用", "else": "大陸市场二次卸装费", "formula": "E3i", "pre0": 0.71, "pre5": "0.71", "pre10": "0.71" },
        tr21:{ "name": "銷售費用", "else": "港口-內地城市(以深圳為例)", "formula": "E3j", "pre0": 3.27, "pre5": "3.27", "pre10": "3.27" },
        tr22:{ "dis": true,"name": "銷售費用", "else": "快遞及倉儲", "formula": "E3k=A*30%", "pre0": 0, "pre5": "", "pre10": "" },
        tr23:{ "dis": true,"name": "銷售費用-耗損", "else": "水果報廢(30%)", "formula": "E4=B*30%", "pre0": 18.46, "pre5": "18.46", "pre10": "18.46" },
        tr24:{ "dis": true,"name": "税前净利", "else": "", "formula": "F=C-D-E", "pre0": 0, "pre5": "", "pre10": "" },
    },
    computed: {
        
    },
    watch: {
        "tr1": {
            handler: function (newTr1, oldTr1) {
                this.$set(this.tr6, "pre0", newTr1.pre0 * 0.05);
                this.$set(this.tr7, "pre0", newTr1.pre0 * 0.05);
                this.$set(this.tr4, "pre0", parseFloat(this.tr5.pre0) + parseFloat(newTr1.pre0 * 0.05) + parseFloat(newTr1.pre0 * 0.05))
                this.$set(this.tr22, "pre0", newTr1.pre0 * 0.3);
                this.$set(this.tr8, "pre0", parseFloat(newTr1.pre0 * 0.3) + parseFloat(this.tr9.pre0) + parseFloat(newTr1.pre0 * 0.05) + parseFloat(this.tr12.pre0)+parseFloat(this.tr13.pre0) +parseFloat(this.tr14.pre0) +parseFloat(this.tr15.pre0)+parseFloat(this.tr16.pre0)+parseFloat(this.tr17.pre0)+parseFloat(this.tr18.pre0)+parseFloat(this.tr19.pre0)+parseFloat(this.tr20.pre0)+parseFloat(this.tr21.pre0)+parseFloat(this.tr23.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr2": {
            handler: function (newTr2, oldTr2) {
                this.$set(this.tr23, "pre0", newTr2.pre0 * 0.3);
                this.Customer();
            },
            deep: true
        },
        "tr5": {
            handler: function (newTr5, oldTr5) {
                this.$set(this.tr4, "pre0", Number(newTr5.pre0)+Number(this.tr6.pre0)+Number(this.tr7.pre0))
                this.Customer();
            },
            deep: true
        },
        "tr9": {
            handler: function (newTr9, oldTr9) {
                this.$set(this.tr8, "pre0", parseFloat(newTr9.pre0) + (parseFloat(this.tr1.pre0)*0.05) + parseFloat(this.tr12.pre0)+parseFloat(this.tr13.pre0) +parseFloat(this.tr14.pre0) +parseFloat(this.tr15.pre0)+parseFloat(this.tr16.pre0)+parseFloat(this.tr17.pre0)+parseFloat(this.tr18.pre0)+parseFloat(this.tr19.pre0)+parseFloat(this.tr20.pre0)+parseFloat(this.tr21.pre0)+parseFloat(this.tr22.pre0)+parseFloat(this.tr23.pre0))
                console.log(newTr9, oldTr9, this.tr8.pre0)
                this.Customer();
            },
            deep: true
        },
        "tr12": {
            handler: function (newTr12, oldTr12) {
                let e = parseFloat(this.tr9.pre0) + (parseFloat(this.tr1.pre0)*0.05)+parseFloat(newTr12.pre0) + parseFloat(this.tr13.pre0) + parseFloat(this.tr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0)+parseFloat(this.tr23.pre0);
                console.log("PPP",this.tr1.pre0, e, parseFloat(this.tr1.pre0)*0.05);
                this.$set(this.tr8, "pre0",  e);
                this.$set(this.tr11, "pre0",  parseFloat(newTr12.pre0) + parseFloat(this.tr13.pre0) + parseFloat(this.tr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr13": {
            handler: function (newTr13, oldTr13) {
                this.$set(this.tr8, "pre0",  parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0)  + parseFloat(newTr13.pre0) + parseFloat(this.tr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0)+parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",  parseFloat(this.tr12.pre0)  + parseFloat(newTr13.pre0) + parseFloat(this.tr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0))
                this.Customer();
            },
            deep: true
        },
        "tr14": {
            handler: function (newTr14, oldTr14) {
                this.$set(this.tr8, "pre0",   parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(newTr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0)+parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",   parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(newTr14.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0))   
                this.Customer();
            },
            deep: true
        },
        "tr15": {
            handler: function (newTr15, oldTr15) {
                this.$set(this.tr8, "pre0",  parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",  parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr15.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0))          
                this.Customer();
            },
            deep: true
        },
        "tr16": {
            handler: function (newTr16, oldTr16) {
                this.$set(this.tr8, "pre0",  parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr16.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) +parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",  parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr16.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr17": {
            handler: function (newTr17, oldTr17) {
                this.$set(this.tr8, "pre0",  parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr17.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",  parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr17.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr18": {
            handler: function (newTr18, oldTr18) {
                this.$set(this.tr8, "pre0",  parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr18.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",  parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr18.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr19": {
            handler: function (newTr19, oldTr19) {
                this.$set(this.tr8, "pre0",   parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr19.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",   parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr19.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
        "tr20": {
            handler: function (newTr20, oldTr20) {
                this.$set(this.tr8, "pre0",   parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr20.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",   parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr20.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr21.pre0) + parseFloat(this.tr22.pre0))
                this.Customer();
            },
            deep: true
        },
        "tr21": {
            handler: function (newTr21, oldTr21) {
                this.$set(this.tr8, "pre0",   parseFloat(this.tr9.pre0) + parseFloat(this.tr1.pre0 * 0.05)+parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr21.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr22.pre0) + parseFloat(this.tr23.pre0))
                this.$set(this.tr11, "pre0",   parseFloat(this.tr12.pre0) + parseFloat(this.tr13.pre0)  + parseFloat(this.tr14.pre0) + parseFloat(newTr21.pre0) + parseFloat(this.tr16.pre0) + parseFloat(this.tr17.pre0) + parseFloat(this.tr18.pre0) + parseFloat(this.tr19.pre0) + parseFloat(this.tr20.pre0) + parseFloat(this.tr15.pre0) + parseFloat(this.tr22.pre0));
                this.Customer();
            },
            deep: true
        },
    },
    methods: {
        
        Customer(){
            let a = parseFloat(this.tr1.pre0);
            let b = parseFloat(this.tr2.pre0);

            let d1 = parseFloat(this.tr5.pre0); 
            let d2 = parseFloat(this.tr6.pre0);
            let d3 = parseFloat(this.tr7.pre0);

            let e1 = parseFloat(this.tr9.pre0);
            let e2 = a*0.05;
            let e3a = parseFloat(this.tr12.pre0);
            let e3b = parseFloat(this.tr13.pre0);
            let e3c = parseFloat(this.tr14.pre0);
            let e3d = parseFloat(this.tr15.pre0);
            let e3e = parseFloat(this.tr16.pre0);
            let e3f = parseFloat(this.tr17.pre0);
            let e3g = parseFloat(this.tr18.pre0);
            let e3h = parseFloat(this.tr19.pre0);
            let e3i = parseFloat(this.tr20.pre0);
            let e3j = parseFloat(this.tr21.pre0);
            let e3k = a*0.3;

            let e3 = e3a + e3b +e3c +e3d + e3e + e3f + e3g + e3h + e3i + e3j + e3k;     
            let e4 = b*0.3;

            let c = a - b;
            let d = d1+d2+d3;
            let e = e1 + e2 + e3 + e4;

            let f = c-d-e;

            this.$set(this.tr24, "pre0", f);
        },
        inputCustomer(et, tr){
            console.log(et, tr);
            let a = parseFloat(this.trList[0].pre0);
            let b = parseFloat(this.trList[1].pre0);
            let c = a - b;
            let d1 = parseFloat(this.trList[4].pre0); 
            let d2 = a*0.05;
            let d3 = a*0.05;
            let d = d1 + d2 + d3;

            let e1 = parseFloat(this.trList[8].pre0);
            let e2 = a*0.05;
            let e3a = parseFloat(this.trList[11].pre0);
            let e3b = parseFloat(this.trList[12].pre0);
            let e3c = parseFloat(this.trList[13].pre0);
            let e3d = parseFloat(this.trList[14].pre0);
            let e3e = parseFloat(this.trList[15].pre0);
            let e3f = parseFloat(this.trList[16].pre0);
            let e3g = parseFloat(this.trList[17].pre0);
            let e3h = parseFloat(this.trList[18].pre0);
            let e3i = parseFloat(this.trList[19].pre0);
            let e3j = parseFloat(this.trList[20].pre0);
            let e3k = a*0.3;
            let e3 = e3a + e3b +e3c + e3d + e3e + e3f + e3g + e3h + e3i + e3j + e3k;     
            let e4 = b*0.3;
            let e = e1 + e2 + e3 + e4;

            let f = c-d-e;

            console.log(a, b, c, d, e);

            this.$set(this.trList[3], "pre0", (d1 + d2 + d3).toFixed(2));
            this.$set(this.trList[4], "pre0", d1);
            this.$set(this.trList[5], "pre0", d2.toFixed(2));
            this.$set(this.trList[6], "pre0", d3.toFixed(2));

            this.$set(this.trList[7], "pre0", e.toFixed(2));
            this.$set(this.trList[8], "pre0", e1);
            this.$set(this.trList[9], "pre0", e2.toFixed(2));
            this.$set(this.trList[10], "pre0", e3.toFixed(2));
            this.$set(this.trList[21], "pre0", e3k.toFixed(2));
            this.$set(this.trList[22], "pre0", e4.toFixed(2));

            this.$set(this.trList[2], "pre0", a - b);
            this.$set(this.trList[23], "pre0", f.toFixed(2));

        },
        resetCustomer(){}
        
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {},
    mounted() {
    },
    beforeUpdate() {},
    updated() {},
    beforeDestory() {},
    destroyed() {}
})
