Planbox Admin Prototype
=======================

To get set up, run:

    git clone git@github.com:openplans/planbox-admin-prototype.git
    cd planbox-admin-prototype
    npm install
    bower install

To run the server locally:

    grunt serve

Deploying
---------

To deploy this repository to gh-pages, run the following commands **within a
clean repository** (any files that are modified and not checked in will find
their way into the distribution if your repository is not clean):

    bower install
    grunt build
    git add --all dist
    git commit -m "Update the distribution files"
    git push
    git subtree push --prefix dist origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*

If you're missing subtree, [install it](http://engineeredweb.com/blog/how-to-install-git-subtree/).

