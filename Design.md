# Design Iterations {#design}

The following chapter exposes the design process and reasoning behind the design decisions made for the prototypes. It leads through the different prototyping stages and user testing, closing with an evaluation of the design.

The prototyping happened in three subsequent stages. The first stage comprised a set of pencil sketches on paper; the second prototype was created with web technology, but fixed around a certain source code and faked interactivity; the third prototype was implemented as a plug-in for the Atom editor, called *Scope Inspector*, and is able to work with any source code it is provided.

In chapter \ref{exploration}, we developed four **characteristics** of well-integrated language tools: performance, modularity, smartness, and a focus on code. Additionally, we listed five common scoping **problems** in chapter \ref{concepts}: hoisting, closure, shadowing, implicit variable declaration, and lookup performance. The design needs to address both the characteristics (non-functional requirements) and the problems (functional requirements). For every prototype, the addressed requirements are referred to in the respective section. However, some requirements are not addressed at all. The *smartness* characteristic is not explicitly focused on by the design, as in the case of scope there is no ambiguity.  Neither is *Closure* addressed by any of the prototypes, for the reason that it is—from a technology perspective—hard to *correctly* detect. It is certainly possible , but given the short amount of time it was not a priority. Finally, linting tools already point out *implicit variable declaration*, which is why it is not in the scope of the design.

<!--

The first prototype only addresses nesting. While nesting is not generally seen as a problem, deeply nested scope is more complex than „flat“ scope, and may even have performance impacts, as stated in chapter \ref{concepts}. Thus, making the nesting visible may result in users being more conscious of their coding style and its impacts. The prototype therefore addresses the *lookup performance* problem. The second, scripted prototype addresses nesting as well as *shadowing* by indicating shadowing and shadowed identifiers in the sidebar.

The third prototype additionally indicates *hoisting*. Hoisted indicators are shown both inline and in the sidebar. As the working prototype, it also addresses the non-functional characteristics
-->

## Definitions

To be able to discuss the qualitites of the concept and prototypes, we must first define a number of terms.

Scope block
  ~ In a JavaScript text file, a scope block is the textual block representing a logical scope. For a function, which in JavaScript creates a new scope, the scope block starts at the `function` keyword and ends at the closing curly brace `}` of the function body. If, in a text editor, the cursor is placed anywhere inside this scope block (but outside of child scopes), the scope block is called *active scope*.

Current scope
  ~ In a running JavaScript program, it is the currently executed scope. This is a term related to the run-time rather then to author-time, and should not be confused with *active scope* described below.

Active scope
  ~ The scope which is currently in focus of editing. In relation to IDEs, code editors and the prototypes presented in this chapter, the active scope always describes the scope that the cursor is placed in.

Local scope
  ~ In the context of nested scopes, the local scope is the one in focus (be it in the execution context during run-time, or the editing context during author-time). Local scope is contrasted with non-local scope; scopes that are logically distant from the local scope. Those may be ancestor scopes, descendant scopes, or parallel scopes. The term is also used to contrast *global scope*.

## Sketching

One could argue that sketching is part of the earlier exploration phase, rather than of the prototyping phase. However, next to sketching different ideas, the author also sketched different possible implementations for one feature that seemed valuable to the design solution: *highlighting*. Highlighting of scopes through different colours—text or background colours—makes deeply nested scope more visible and thus directly addresses the problem of *lookup performance*.

The basis for the sketches were printouts of the same source code, each leading to a different way of highlighting.

#### Active scope, inclusive

This sketch highlights the active scope block by applying a background colour to it. The highlighting is *inclusive*, i.e. any descendant (inner) scopes are highlightes as well.

#### Active scope, exclusive

Same as above, but descendant scope blocks are excluded from highlighting. This way of highlighting was implemented in the scripted prototype (see section \ref{working-prototype}).

#### Active scope and ancestor scopes

Next to highlighting the active scope, its ancestor scopes can also be highlighted to emphasize nesting. To contrast the ancestor scopes from the active scope, the highlighting would make use of different background colours, for example different shades of grey. This way of highlighting can be combined with both the inclusive and exclusive approach.

#### Scope colouring

Described by Crockford \citeyear{crockford} as „context colouring“, this way of highlighting would not apply a background colour, but instead replace the existing forms of syntax highlighting. Thus, the highlighting would not depend on the cursor position (which defines the *active scope*), but would be static instead.

#### Identifier origin

Additionally to emphasizing code blocks, individual identifiers can be highlighted. Given a highlighted active scope, this sketch highlights identifiers that are defined in that scope but used somewhere else (in descendant scopes).

This works as well for the *scope colouring* described above, as each scope has a fixed colour. Identifiers that are used in other scopes than they are defined in can therefore always be recognized if they appear in the colour of their origin scope.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=\textwidth]{img/sketch_highlighting.jpeg}
\caption{Some of the sketches to explore ways of highlighting}
\label{fig:sketches2}
\end{figure}

## Scripted prototype

It very quickly became clear that the sketches were of little value. Although most of them gave a general impression on where the selected scope started and where it ended, it did not allow the user to see the big picture. It seemed probable that a more interactive prototype would be more helpful in this regard. As its capabilities of working with code are limited and the code had to be specifically prepared, this is called a *scripted prototype*.

As the author is most familiar with web technologies, the scripted prototypes would be built using \ac{html}, \ac{css} and JavaScript and run in a web browser. Other prototyping tools, such as Balsamiq or Indigo Studio, would not allow for enough detail in terms of highlighting certain code passages, and would have represented a learning overhead.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth,height=0.75\textheight]{img/prototype-1.png}
\caption{Screenshot of the scripted prototype run in a browser}
\label{fig:scriptedprototype}
\end{figure}

A code syntax highlighter\footnote{Prism, see \url{http://prismjs.com/}} was used to turn the subject source code into styled \ac{html} tags, to make it appear as if it was inside of a real code editor. Applying syntax highlighting was also necessary to see if the different highlighting techniques, as sketched out in the previous phase, would interfere with syntax highlighting.

Furthermore, markers in the form of HTML tags were added to the subject source code, which made it possible to apply different styles\footnote{For example text colours, background colours, of font styles.} to regions of the code. This was later used to realize highlighting of the scope block.

Two distinct \ac{ui} elements were added: a sidebar and a bottom bar. The content of both depends on the *active scope*, i.e. the scope the cursor is placed in. For each of the nested scope blocks that the cursor is positioned in (beginning from the local scope, going outwards up to the global scope), the sidebar shows a pane. Each pane contains the scope’s name along with a list of identifiers defined within that scope. In opposition to the working prototype, the scripted prototype does not show phenomena like hoisting and shadowing. The panes are ordered ascending by logical distance, i.e. the local scope would be on top, the next surrounding scope beneath it, and so forth; up to the global scope on the bottom.

The different panes are hard-coded: all panes exist in the markup of the prototype at all times and are pre-filled with the relevant data, but are shown and hidden on demand.

The bottom bar shows a horizontal list of scope names. It makes use of the *breadcrumbs* \ac{ui} pattern\footnote{In the Yahoo pattern library: \url{https://developer.yahoo.com/ypatterns/navigation/breadcrumbs.html}}. Each listed scope, beginning from the global scope on the very left, up to the local scope on the right, can be highlighted and navigated to by clicking on its label. By hovering\footnote{Hovering: Placing the mouse cursor over an element.} over the label, the user can get a preview of the target scope, as it is highlighted in the editor alongside the currently active scope.

### Constraints

The scripted prototype has some drawbacks, some of which might influence its quality. The most obvious one is the fact that it only works with a static, predefined source code, which is manually adapted to serve the prototype’s purpose. This implies that

1. changes can not be made to the code, which makes the experience of the prototype very different from a real code editor, and
2. it is hard to tell if the prototype works similarily well with code that is more complex, less complex, or of an overall different style.

The fact that there are no text editing facilities comes with another drawback, namely the absence of a cursor. If a cursor cannot be placed anywhere in the editor, the ‚activation‘ of a scope block must be achieved differently. In the case of this prototype, it is solved by clicking on a piece of code. However, clicking anywhere in the line besides the actual text does not change the active scope.

### Evaluation of the scripted prototype

The prototype was tested with two JavaScript developers in individual in-person walkthrough sessions. The users were introduced to the concept, if they were not familiar with it already, and explained the basic constraints of the prototype (as mentioned above). They were thereafter able to explore and test the prototype to their likings. One of the two sessions have been recorded as a screencast.

The users liked both the „preview“ feature (hovering over a breadcrumb) and the sidebar. The preview gave them an opportunity to quickly get a visual overview of their position in the code and the active scope chain. The sidebar showed them which variables and functions are available in a given context. Overall, they liked the dynamicity of the prototype, as they could ‚play around‘ with it and understand the design concept just by trying. They quickly made a connection between the cursor position and the active scope along with its content.

One of the users suggested possible improvements or alternative designs for existing features. He recommended a wider use of colour coding to create a link between the scope in the editor window and the sidebar, for example by colouring all the ancestor scopes in different shades of grey. He also suggested an alternative visual structure for the sidebar instead of the list, for example nested clusters or a graph. For hoisting, the user came up with an idea to integrate indicators into the text editor: a „phantom“ variable declaration—which would be grey and not editable—could be inserted on top of a scope to show that a certain variable declaration would be hoisted up there. This indicator should be collapsible so that it does not interfere with the editing process. Because of technical constraints, this idea was not implemented in the next prototype iteration; however, it seems a sensible solution to the hoisting indication problem, as it communicates this implicit phenomenon very clearly.

In conclusion, the prototype was well-received and served its purpose well. It became clear that a consistent and clear visual language for the next iteration of the prototype was necessary, and that a direct connection between the code and the scope visualization has to be communicated. Like the sketches, it addressed the *lookup performance*  problem by visualizing nested scope, even more so through the sidebar and bottom bar. It also put a stronger *focus on code* by making it navigatable using the bottom bar, and by dynamically showing changes directly in the editor.

## Working prototype

The third and final prototype was built as a working prototype capable of handling any JavaScript scope, rather than as a proof-of-concept. It was integrated into the Atom\footnote{See \url{https://atom.io/}} text editor as a so-called *package* or *plug-in*, released as \gls{oss} and was made publicly available for using and testing. The package is called „Scope Inspector“ and will be referred to using this name throughout this section.

### The prototyping platform

For the prototype to yield meaningful results, I decided to integrate it into a real \ac{ide}. This decision was informed by several circumstances. The first and most obvious is that I could address a broader community of users this way. If the prototype was, like the scripted prototype, implemented in isolation as a standalone application, it would raise the barrier for people to test and for me to distribute it. But by building it as a plug-in to an existing \ac{ide}, I could leverage the distribution channels that were already in place. A second reason is that users are already familiar with the software and do not have to orientate themselves anew. This also implies that all the features that the user *expects* from an \ac{ide} are in place, and the prototype can more seamlessly be integrated into the user’s workflow. Finally, the third reason for building a prototype on top of an existing \ac{ide} is that it can make use of the design language in place, which eliminates the need to take decisions that are rather irrelevant for this prototype, such as the choice of a typeface and colour palette.

As a prototyping platform, the author decided on the Atom text editor. Atom is open source and created by the software company Github. By the time of writing, Atom is a relatively young project with a growing community and plug-in ecosystem. The reasons for deciding in favour of Atom are threefold: the technologies it is built upon, its internal software architecture, and the user group it is targeting.

Atom is built on web technologies, namely \gls{webkit}\footnote{See \url{http://www.webkit.org/}} and \gls{node}\footnote{See \url{http://nodejs.org/}}. WebKit is the browser engine used by the web browsers Google Chrome and Apple Safari, amongst others, and is therefore responsible for the \acl{ui} layer of Atom. Node.js is the JavaScript platform responsible for running any non-\ac{ui} logic. Atom is mostly written in \gls{coffeescript}\footnote{CoffeeScript is a programming language that transcompiles to JavaScript.}. Consequently, Atom packages can be written in CoffeeScript or JavaScript, using HTML and CSS for the \ac{ui}. As I am familiar with these technologies, Atom provided an ideal prototyping platform with a low entry barrier.

For extending Atom, it offers an \ac{api} which can be used by plug-ins. Atom’s internal architecture is built in a modular way, so that plug-ins can hook into nearly everything that happens and react to it. The prototype makes use of this fact in many ways, for example by showing and hiding its \ac{ui} elements depending on the type of file that is being edited.

Atom is marketed by Github as a „hackable text editor for the 21st Century“\footnote{See \url{https://atom.io/}, accessed 18.05.2014}. It is also intended to be a „deeply extensible system that blurs the distinction between ‚user‘ and ‚developer’.“ Those claims lead to the conclusion that Atom is a text editor built for developers, especially—but not exclusively—web developers. While not every web developer is a proficient JavaScript developer, the target groups of Atom and this prototype seem to overlap to a large extent.

### Parsing and gathering relevant information

For the prototype to be as *complete* and *correct* as possible, it was built on top of an existing JavaScript parser called Esprima\footnote{See http://esprima.org/}. The process of extracting the relevant scope structure and annotations from the \ac{ast}\footnote{The \ac{ast} is the data structure that is returned by the parser, which contains all the lexical statements and expressions.} will not be discussed here in greater detail, but is instead described in a blog post \cite{tvo}.

However, it is important to mention what data structures are extracted from the source code. Analoguous to the nature of JavaScript scope as described in chapter \fullref{research}, the data structure is a hierarchy of objects. Each object represents a scope and may have metadata as well as a list of identifiers attached to it. An identifier is either a child scope (as created by a function) or a  variable. For scope objects, the metadata are its name and its location in the source code (row and column of the start and end points), whereas for variables the metadata are its name, location, if it is hoisted, by which child scope identifiers it is shadowed, and which identifier it is shadowing. Figure \ref{fig:scope} shows the data structure by example of the source code in listing \ref{lst:server} (see appendix). The metadata are left out for the sake of readability.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.7\textwidth]{img/scope.pdf}
\caption{The data structure as utilized by the prototype}
\label{fig:scope}
\end{figure}

Using this data structure, the prototype can show meaningful data to the user, which would not have been possible with the \ac{ast} alone. The modular composition of the prototype, which decouples the task of parsing from the task of displaying information, makes it possible to re-use each of the components. The component described in this section, which is responsible for turning the \ac{ast} into a „scope tree“, could be used in plug-ins for any \ac{ide} to achieve similar functionality as the one of this prototype.

### Interface and Interactions

The design respects that the subject of a developer’s work is the code itself, not the tools that surround it. This is why the solution integrates into the most important part of the IDE, the text editor, directly. The features built into the editor itself will be called *inline* features.

Atom’s interface is, by default, threefold: the text editor takes the most space; on its left is a sidebar containing a file browser, and on the bottom is a status bar. As many web browsers, text editors, and IDEs, multiple open files are accessed through *tabs* on the top of the screen. The tabs are important, because the Scope Inspector is only active as long as an editor with a JavaScript file is in the foreground. Whenever the user switches to another tab, the Scope Inspector is activated or deactivated, depending on if the tab contains an editor with a JavaScript file or not.

The Scope Inspector package uses a visual style that is consistent with Atom’s. Any icons in use are taken from the Octicons\footnote{See \url{https://github.com/styleguide/css/7.0}} icon set, which is incorporated into every Github product. Atom supports themes (colour schemes) for both the application window and the editor. Scope Inspector makes use of the colours defined in those themes. This way, the package \ac{ui} feels more natural to the user. However, there may be difficulties if the theme is not well-defined and the colours are badly balanced. One user reported very low contrast between the editor’s background and the scope highlighting. In addition to pre-defined theme colours, Atom also provides a set of pre-styled \ac{ui} components, for example buttons and panes, which have been used in the prototype.

Whenever the Scope Inspector is active, two things are obvious: on the bottom of the editor, a panel is shown which we call *bottom bar*, and the active scope is highlighted inline. Additionally, a sidebar can be toggled using the Atom command „Scope Inspector: Toggle Sidebar“. This command is accessible using the menu, the command palette, a keyboard shortcut (`Ctrl+Alt+i` by default), and a toggle button on the bottom bar. The user can choose wether or not to use the package with the sidebar enabled, which addresses the *modularity* characteristic. For *performance* reasons, the JavaScript program is not re-evaluated (i.e. its scope structure is built up) on every character that is typed by the user, but only when its file is saved. The several components and their functionality are explained in more detail in the following sections.

#### Inline scope highlighting

As explained above, the *active scope* is the immediate scope the cursor is placed in. It is emphasized by highlighting it through a lighter or darker background colour (depending on Atom’s colour scheme). If the cursor is placed in a different scope, the formerly active scope is de-highlighted, and the now active scope is highlighted instead.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth]{img/scope-highlight.png}
\caption{Subtle highlighting of an anonymous function}
\label{fig:protohighlighting}
\end{figure}

While the scripted prototype implements *exclusive highlighting*, the working prototype implements *inclusive highlighting*, which means that the inner scopes are highlighted as well. This is due to technical reasons; building exclusive highlighting into the prototype would have taked a lot more time. In further iterations of the prototype, an option to enable and disable exclusive highlighting could be provided.

The bottom bar contains a toggle button\footnote{A switch in the form of a button, which can be either \emph{on} or \emph{off}.} to enable or disable highlighting of the global scope. Highlighting the global scope with *inclusive highlighting* is not useful, as the whole file would be highlighted (and there would be nothing left to contrast the highlight to).

#### Inline hosting indication

If there are identifiers being hoisted in the active scope, an indicator—which consists of a dotted line with an arrow head—is shown inline. The indicator appears at the place in the source code where the identifiers are hoisted to. This is *before* the first statement in the given scope which is not a variable declaration. In figure \ref{protohoisting}, this is before the very first line of the scope block. By hovering over the indicator line, the user reveals a tooltip listing all the identifiers that are being hoisted to this place. This feature obviously addresses the *hoisting* problem, and does so while maintaining a *focus on code*.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth]{img/hoisting.png}
\caption{Inline hoisting indicator with tooltip}
\label{fig:protohoisting}
\end{figure}

#### Bottom bar

The bottom bar serves two purposes: it provides a quick glance of where in the scope hierarchy the cursor is and provides quick access to two settings.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth]{img/bottombar.png}
\caption{The bottom bar, showing the scope chain and toggle buttons}
\label{fig:bottombar}
\end{figure}

On the right side of the bottom bar, two toggle buttons allow for enabling and disabling of two features. The right button, showing a list icon, shows or hides the sidebar. The left button with the label „Highlight Global“ toggles the highlighting of the global scope (as described above).

The left side of the bottom bar shows the breadcrumbs known from the scripted prototype. The breadcrumbs, implemented as simple buttons, are labeled with the corresponding scope name. The global scope is always on the left, whereas the currently local, active scope is on the right. By hovering over any of the breadcrumb buttons, the user can preview the respective scope highlighting in the editor. The preview is applied in addition to the currently active highlight in a different colour.

By hovering over the breadcrumbs from left to right or from right to left, the user can make the relationship between the logical structure of the JavaScript program (in the form of hierarchic scopes) and the textual structure (in the form of code) visible. As in the previous prototype, the bottom bar emphasizes the scope nesting and thus addresses the *lookup performance* problem.

#### Sidebar

The sidebar shows content depending on the currently active scope. Similarily to the scripted prototype, the sidebar lists one pane for each scope in the hierarchy of the active scope. The active scope is listed on top, while its ancestors are listed below, up to the global scope on the very bottom.

\begin{figure}[H]
\centering
\includegraphics[keepaspectratio,width=0.4\textwidth]{img/sidebar.png}
\caption{Sidebar (clipped), with shadowing, shadowed, and hoisted identifiers}
\label{fig:protosidebar}
\end{figure}

Each pane is entitled by the name of the scope. In case of function scope, the name of the function becomes the scope name („(anonymous function)“ in the case of an unnamed function expression). In case of the global scope, the name is „GLOBAL“. Underneath the title, the names of all identifiers defined within the scope are listed, along with certain attribute annotations.

* Function parameters are listed first. They appear with the annotation „param“, set in smaller text size to the right.
* General variables follow the parameters. If they are not shadowed, they have no annotations.
* Functions are the last entities in the list. They are connotated with a pair of parantheses „()“.

The listed identifiers show also if they are hoisted, shadowed, or if they shadow other identifiers. This is indicated by different stylistic changes.

* Hoisted identifiers have a small, upwards-pointed arrow on the left side of their label. This indicates that their declaration is implicility moved upwards in code.
* Shadowed identifiers are printed in a more subtle text colour. Besides that, their label is striked-through to indicate that they are not accessible within the given descendant scope.
* Identifiers that shadow other identifiers in ancestor scopes are printed in a highlight colour. In case of Atom’s standard \ac{ui} theme, this is a bright blue colour.

Consequently, the sidebar addresses both the *shadowing* and *hoisting* problems.

## User Testing & Evaluation

The goal of user testing was to collect both qualitative and quantitative data through different methods. The quantitative data collection was built into the prototype in form of a connection with Google Analytics\footnote{A website and app analytics platform.}.

### Test installment

Atom includes a package management system with an online repository, called \ac{apm}. This system allows developers to publish Atom packages and thus make them available for any Atom user to download and use. Consequently, this prototype was distributed via \ac{apm}.

I originally recruited two full-time developers and one part-time developer for remote user testing. They agreed to install the package and use it over the course of one week (full-time developers) or one day (part-time developer), respectively, integrating it into their usual workflows. I would subsequently conduct interviews with them, as contextual inquiries were not possible, due to the fact that the developers are located in Germany and I am located in Sweden. However, neither of them was available for the actual testing phase. The full-time developers were—during the relevant time span—working on tasks of their job that do not involve JavaScript development, whereas the part-time developer did not have any relevant work at all.

Instead, I relied on local and remote contextual interviews. Four potential users agreed to test the prototype in short sessions (30-60 minutes). The sessions were not directed, except from a short introduction to make sure the user knows about the research background and the *scope* concept. The users were asked to speak out loud during the session, and I was helping them if they got stuck or did not discover a feature. Two of the four sessions were recorded using screencasts; the others were not recorded due to technical reasons. Two of the four test users had previously been interviewed during the research phase.

In addition to this planned user test, publishing the prototype via \ac{apm} made it available to the general public. It was announced on several social networks, especially targeting existing Atom users, with the goal of getting users to download and use it. Two weeks after publishing the prototype, the number of downloads counted ~150. This way of testing „in the wild“ makes it harder to gather feedback, compared to the method of addressing potential users directly. However, it also yielded unstructured, but valuable, feedback on several social media channels.

### Usage metrics

The prototype was built with the option to collect usage metrics using the Google Analytics service. By default, this option was set to *off*, as I oppose the unknown tracking of any data for ethical reasons. Users were asked in the `README` file, which is displayed both on the package’s page\footnote{See \url{https://atom.io/packages/scope-inspector}} and on Github\footnote{See \url{https://github.com/tvooo/scope-inspector}}, to enable tracking in Atom’s *settings* panel for the Scope Inspector package.

If enabled, the following events are tracked:

- The package is enabled/disabled
- The sidebar is shown/hidden
- The user hovers over a scope breadcrumb in the bottom bar and thus previews a scope highlighting
- The user clicks on a scope breadcrumb in the bottom bar and thus jumps to the beginning of scope, making it the active scope and highlighting it

Through collecting these events, a claim can be made—to a certain extent—for how helpful certain features are.

### Testing Results

#### Analytics

Analytical metrics have been tracked over the course of 13 days. In total, five different users (including myself) had tracking enabled, with a peak of fours simultaneous users. On average, two to three users contributed data each day.

In those nearly two weeks, the sidebar was enabled 76 times, whereas interactions with elements on the bottom bar happened 144 times. However, only 22 of those interactions were clicks which have to happen intentionally—the hover events can occur by chance (for example by moving the mouse from the editor window to the status bar and vice-versa). Given those circumstances, it can be concluded that the sidebar was more in use than the bottom bar. But event metrics can not measure if users used the bottom bar for orientation, for example just by looking at it and figuring out where in the scope hierarchy they are. Thus, the analytics result are of limited use for the evaluation of the prototype.

#### Interviews with developers

This section summarizes the finding of the user testing, as collected through interviews. None of the interviewees had used the prototype before, and both are only casual Atom users.

Inline
  ~ The inline highlighting was perceived as useful, as users claimed it helped them to focus on the current code and also showed them the scope limits (in code). None of the developers discovered the inline hoisting indicator, it had to be pointed out to them. Even after pointing it out, the users did not use the inline indicator, but instead just looked at the sidebar to see which identifiers were being hoisted. One of the developers was not familiar with the concept of hoisting.

Sidebar
  ~ One functionality that each user found to be missing was a means of navigation through the sidebar. Two users expected to be able to jump to a variable declaration if he sees a problem there, just by clicking on the variable’s name. Another user thought the ability to scroll to a certain variable was denoted by the upwards pointing arrow next to it. It was also suggested to be able to jump to the beginning of a scope by clicking on its respective headline, similar to what happens when the user clicks a breadcrumb in the bottom bar. Adding line numbers for each identifiers was also suggested, in order to be able to distinguish anonymous functions better from each other.

    The order of the panels, each representing one scope in the scope chain, was confusing to some users. Although they understood the concept of a scope chain, they expected it to be in the order that scopes appear in code. However, code is linear, while scope is hierarchical, and they do not map directly. It is reasonable to assume that the order which is used in the prototype is learnable for the users, as it works analogously to \ac{css} in the Chrome DevTools. This could for example be achieved by connecting the scope in the sidebar visually with its counterpart in the editor. One user suggested that, when a scope is hovered in the sidebar, its counterpart in the editor could be highlighted (analogous to the effect of hovering a breadcrumb in the bottom bar).

    Another suggestions concerning the sidebar was to highlight even single variables in the editor when they are highlighted in the sidebar. Regarding shadowing, one user was able to detect a bad practice in his code during testing: he had created a shadowing situation in which the two variables of the same name server completely different purposes. Another user misinterpreted the hoisting indicators (upwards arrows) in the sidebar. He assumed that they are pointing upwards because clicking on them would cause the editor to scroll upwards, navigating to the identifier’s declaration.

Bottom bar
  ~ None of the users discovered on their own the possibility to navigate the scope chain by clicking on the breadcrumbs. However, after pointing the feature out, they stated it was useful. One user noted that, once you navigate into a higher scope, you can not go „back“ to the last position (or the previously selected scope, which is nested inside the now active scope).

    Two users stated that the bottom bar would take up too much space, as most developers would like as much space as possible for their code. They suggested to style the breadcrumbs more like hyperlinks on the web, and also to indicate that they are breadcrumbs by deparating them through rightwards pointed arrows. One user even suggested to get rid of the bottom bar completely, in case that the sidebar would take its tasks of navigating and previewing the scope chain.

Modularity
  ~ One of the users asked if he could disable the inline highlighting altogether, as he could imagine it to be annoying in the long run; this is not possible in the final prototype, as during the design phase the highlighting was considered a central element of the design. He suggested that all three parts of the prototype—inline highlighting, sidebar, and bottom bar—should be optional.

Miscellaneous
  ~ Various comments concerned none of the areas above. A suggested feature was for the prototype to give an overview of all the identifiers that are affected by shadowing or hoisting, in order to quickly uncover possible \glspl{codesmell}. In general, so thought one user, would it be a good idea to communicate the *meaning* of a detected code smell and show them how to interpret it: Why is it a possible defect, and what can the developer do to fix it? This would be especially useful for more complex findings, such as closures (which are not implemented in this prototype). Those suggestions drive the design more into an educative direction. Additionally, one bug was found during testing, which is related to the parser and therefore not relevant to the interface.

In total, the prototype did well in user testing. Users stated that it was unobtrusive and helpful, especially the highlighting and sidebar. However, the bottom bar was not as useful to the developers, which mirrors the quantitative results.

#### Social Media Feedback

In the open source software community, social media channels are frequently used to state an opinion on new products, to share news, and to give feedback. The prototype, in the form of the Scope Inspector package for Atom, received positive feedback on different channels.

Several reactions\footnote{See \url{http://www.echojs.com/comment/9867/1} and \url{https://twitter.com/vilmosioo/status/466934333681717248}} on the blog post about the technical side of the Scope Inspector \cite{tvo} suggest that there are difficulties for JavaScript developers to deal with CoffeeScript code. In other words, the target users of the package (JavaScript developers) are not directly able to improve on or modify the package itself. This complicates code contribution for this open source project.

On Github, users filed two issues (bugs). One user requested the possibility to investigate identifiers in the sidebar more deeply (which is impossible to do correctly if the program is not executed). The other one asked for on-the-fly re-evaluation of the scope, as was already asked for in the interviews. At the stage of the prototype, scope is only re-evaluated when the file is saved; looking at linting tools, re-evaluating a short time (100-200ms) after the user stopped typing is a proven strategy\footnote{See \url{https://github.com/tvooo/scope-inspector/issues/7}}. However, this method needs to be tested in terms of performance.

On the news platforms EchoJS and Reddit (JavaScript section) the package got little attention: four and eight upvotes, respectively, although the only comment on Reddit claims that it „looks promising“\footnote{See \url{http://www.reddit.com/r/javascript/comments/25k30l/javascript_scope_inspector_an_atom_package_to/chi27cm}}.

On Twitter, which was used as a marketing instrument as well, the feedback was exclusively positive. One user called it „another reason to consider switching from [Sublime Text to Atom]“\footnote{See \url{https://twitter.com/adardesign/status/466589449561055232}}, while others seemed to be interested as well\footnote{See \url{https://twitter.com/raganwald/status/466930480517246976}}. Five tweets mentioning the package have been both retweeted and favourited about 20 times\footnote{Based on tweets that could be found by the Twitter search for the keyword ```scope inspector’’’.}.



