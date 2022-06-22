class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        let caseInsensitiveModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(caseInsensitiveModel)) {            // does not work with [caseInsensitiveModel] or .caseInsensitiveModel
            throw new Error(`This article model is not included in this gallery!`);
        }

        let articleObject = this.listOfArticles.find(a => a.articleName == articleName);  // finds the object 

        articleModel = caseInsensitiveModel;        // double check

        if (!articleObject) {
            this.listOfArticles.push({
                articleModel,                 // articleModel
                articleName,
                quantity
            });

        } else {
            articleObject.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        let guest = this.guests.find(g => g.guestName == guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let points = 0;

        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        let article = this.listOfArticles.find(a => a.articleName == articleName);
        //let model = this.listOfArticles.find(m => m.articleModel == articleModel);
        let guest = this.guests.find(g => g.guestName == guestName);

        // if (!article || !model) {                     // DOUBLE CHECK THAT SHIT
        //      throw new Error(`This article is not found.`);
        // }
        
        if (!article) {
            throw new Error(`This article is not found.`);
        }

        if (articleName == article.articleName && articleModel != article.articleModel) {    // can be combined on one line
            throw new Error(`This article is not found.`);
        }
        

        //console.log(this.possibleArticles[articleModel])

        if (article.quantity == 0) {                 // DOUBLE CHECK THAT
            return `The ${articleName} is not available.`
        } 

        if (!guest) {
            return `This guest is not invited.`
        }

        if (guest.points < this.possibleArticles[articleModel])  {     // does not work with .
            return `You need to more points to purchase the article.`;
        } else {
            guest.points -= this.possibleArticles[articleModel];  // does not work with .
            guest.purchaseArticle++;     // double check
            article.quantity--;
        }   

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`  /// works with [] only not with .
    }

    showGalleryInfo(criteria) {

        if (criteria == 'article') {

            let result = [];
            result.push(`Articles information:`);
            this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`))
            return result.join("\n");

        } else if (criteria == 'guest') {
            let result = [];
            result.push(`Guests information:`);
            this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`));
            return result.join("\n");
        }
    }

    
} // class closing bracket


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));





