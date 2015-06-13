# Collapsible-list
A very simple pure JavaScript plugin to expand and collapse nested html list!

To make any list collapsible only give `.col_ul` class to desired `ul` tag!

for example i want this list to have collapsible element so i just give it a
`col_ul `class

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<ul class="col_ul">
   <li>helllo</li>
</ul>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

now create **multi level list**

as

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<ul class="col_ul">
    <li> Cities
        <ul>
            <li>karachi</li>
        </ul>
    </li>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

now when you run it it will not collapse you multi level list!

so just add `span `around mult level `li`'s text

as

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<ul class="col_ul">
    <li> <span>Cities</span>
        <ul>
            <li>karachi</li>
        </ul>
    </li>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

now it wil perfectly ;)

You can add infinite levels to your list and it will work flawlessly !

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<ul class="col_ul">
    <li> <span>Cities</span>
        <ul>
            <li><span>karachi</span>
                <ul>
                    <li>North</li>
                </ul>
            </li>
        </ul>
    </li>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

