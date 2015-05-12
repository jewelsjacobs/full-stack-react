# README - Full Stack Group
## The Mean Exchange App

#### References:

* React Docs: http://facebook.github.io/react/docs/getting-started.html
	* Includes ReactJS Starter Kit code samples. Download as zip file or clone repo to get Starter Kit.
* Material Design for Bootstrap theme: http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html
* React Bootstrap: https://www.npmjs.com/package/react-bootstrap



#### To run The Mean Exchange app:

1. Install repo locally (clone or download)

		$git clone git@github.com:austin-pair-programming/full-stack-react.git
2. Need to have React Tools installed

		$npm install -g react-tools
2. Run JSX transformer to transform JSX in the browser

		$jsx --watch src/ build/
		
#### FAQs

Please go to the [wiki](https://github.com/austin-pair-programming/full-stack-react/wiki) to view general questions about this project.


#### Syncing Your Fork
First you need to add the `austin-pair-programming/full-stack-react` repo as an upstream:

    git remote add realorigin https://github.com/austin-pair-programming/full-stack-react.git

Once that has been done, fetch the latest code from `realorigin`:

    git fetch realorigin

Once the latest changes have been fetched, you will need to merge them into your forked repo's master branch:

    git checkout master
    git merge realorigin/master

Provided everything has gone according to plan, push the merged changes to your forked repo's upstream:

    git push
