# GOV.UK Tech Docs Sphinx Theme documentation build configuration file
#
# This file is execfile()d with the current directory set to its containing dir.
#
# Note that not all possible configuration values are present in this autogenerated file.
#
# All configuration values have a default; values that are commented out serve to show the default.

# If extensions (or modules to document with autodoc) are in another directory, add these directories to sys.path here.
# If the directory is relative to the documentation root, use os.path.abspath to make it absolute, like shown here.

# import os
import subprocess
# import sys
# sys.path.insert(0, os.path.abspath("."))

# -- General configuration ------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
needs_sphinx = "3.4"

# Add any Sphinx extension module names here, as strings. They can be extensions coming with Sphinx
# (named 'sphinx.ext.*') or your custom ones.
extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.autosectionlabel",
    "sphinx.ext.autosummary",
    "sphinx.ext.napoleon",
    "myst_parser",
    "pydata_sphinx_theme"
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# The suffix(es) of source filenames.  You can specify multiple suffix as a list of string:
# source_suffix = [".rst", ".md"]
source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

# The encoding of source files.
#
# source_encoding = "utf-8-sig"

# The master toctree document.
master_doc = "index"

# General information about the project.
project = "Tech Docs Sphinx Theme"
author = "Government Digital Service"

# The language for content autogenerated by Sphinx. Refer to documentation for a list of supported languages.
# This is also used if you do content translation via gettext catalogs. Usually you set "language" from the command
# line for these cases.
# language = None

# There are two options for replacing |today|: either, you set today to some non-false value, then it is used:
#
# today = ""
#
# Else, today_fmt is used as the format for a strftime call.
#
# today_fmt = "%B %d, %Y"

# List of patterns, relative to source directory, that match files and directories to ignore when looking for source
# files. These patterns also affect html_static_path and html_extra_path
exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "README.md"]

# The reST default role (used for this markup: `text`) to use for all documents.
# default_role = None

# If true, '()' will be appended to :func: etc. cross-reference text.
# add_function_parentheses = True

# If true, the current module name will be prepended to all description unit titles (such as .. function::).
# add_module_names = True

# If true, sectionauthor and moduleauthor directives will be shown in the output. They are ignored by default.
# show_authors = False

# A list of ignored prefixes for module index sorting.
# modindex_common_prefix = []

# If true, keep warnings as 'system message' paragraphs in the built documents.
# keep_warnings = False

# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = False

# -- Git commit hash ---------------------------------------------------------------------------------------------------

# Get the latest Git commit hash — this is used to redirect the 'View Source' link correctly. If this fails, default to
# `master`. Based on code snippet from:
# https://github.com/sphinx-doc/sphinx/blob/1ebc9c26c7a4c484733beb9f8e39e93846d86494/sphinx/__init__.py#L53
try:
    p = subprocess.run(["git", "show", "-s", "--pretty=format:%H"], stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                       encoding="ascii")
    git_version = p.stdout if p.stdout else "master"
except Exception:
    git_version = "master"

# -- Options for HTML output -------------------------------------------------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for a list of builtin themes.
html_theme = "govuk_tech_docs_sphinx_theme"

# Variables to pass to each HTML page to help populate page-specific options
html_context = {
    "github_url": "https://www.github.com/ukgovdatascience/govuk-tech-docs-sphinx-theme",
    "gitlab_url": None,
    "conf_py_path": "docs/",
    "version": git_version
}

# Theme options are theme-specific and customize the look and feel of a theme further.  For a list of options available
# for each theme, see the documentation.
html_theme_options = {
    "department": "GOV.UK",
    "phase": "Discovery"
}

# Base URL which points to the root of the HTML documentation. It is used to indicate the location of document using
# The Canonical Link Relation (https://tools.ietf.org/html/rfc6596)
# html_baseurl = ""

# Add any paths that contain custom themes here, relative to this directory.
html_theme_path = [".."]

# The name of an image file (relative to this directory) to place at the top of the sidebar.
# html_logo = None

# The name of an image file (relative to this directory) to use as a favicon of the docs.  This file should be a
# Windows icon file (.ico) being 16x16 or 32x32 pixels large.
# html_favicon = None

# Add any paths that contain custom static files (such as style sheets) here, relative to this directory. They are
# copied after the builtin static files, so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]

# Add any extra paths that contain custom files (such as robots.txt or .htaccess) here, relative to this directory.
# These files are copied directly to the root of the documentation.
# html_extra_path = []

# Custom sidebar templates, maps document names to template names.
# html_sidebars = {}

# Additional templates that should be rendered to pages, maps page names to template names.
# html_additional_pages = {}

# If true, "Created using Sphinx" is shown in the HTML footer. Default is True.
# html_show_sphinx = True

# This is the file name suffix for HTML files (e.g. ".xhtml").
# html_file_suffix = None

# Language to be used for generating the HTML full-text search index. Sphinx supports the following languages:
#   'da', 'de', 'en', 'es', 'fi', 'fr', 'hu', 'it', 'ja'
#   'nl', 'no', 'pt', 'ro', 'ru', 'sv', 'tr', 'zh'
# html_search_language = "en"

# A dictionary with options for the search language support, empty by default. 'ja' uses this config value. 'zh' user
# can custom change `jieba` dictionary path.
# html_search_options = {"type": "default"}

# The name of a javascript file (relative to the configuration directory) that implements a search results scorer. If
# empty, the default will be used.
# html_search_scorer = "scorer.js"

# Output file base name for HTML help builder.
htmlhelp_basename = "govuk-tech-docs-sphinx-themedoc"

# -- Options for autosection output ------------------------------------------------------------------------------------

# Prefix document path to section labels, otherwise autogenerated labels would look like 'heading'
# rather than 'path/to/file:heading'
autosectionlabel_prefix_document = True

# -- Options for autosummary output ------------------------------------------------------------------------------------

# Set the autosummary to generate stub files
autosummary_generate = True

# -- Options for Napoleon extension ------------------------------------------------------------------------------------

# Napoleon settings to enable parsing of Google- and NumPy-style docstrings.
# napoleon_google_docstring = True
# napoleon_numpy_docstring = True
# napoleon_include_init_with_doc = False
# napoleon_include_private_with_doc = False
# napoleon_include_special_with_doc = True
# napoleon_use_admonition_for_examples = False
# napoleon_use_admonition_for_notes = False
# napoleon_use_admonition_for_references = False
# napoleon_use_ivar = False
# napoleon_use_param = True
# napoleon_use_rtype = True

# -- Options for MyST --------------------------------------------------------------------------------------------------

# Enforce heading anchors for h1 to h6 headings
myst_heading_anchors = 6

# Enable MyST extensions
myst_enable_extensions = [
    "amsmath",
    "colon_fence",
    "deflist",
    "dollarmath",
    "html_admonition",
    "html_image",
    # "linkify",
    "replacements",
    "smartquotes",
    "substitution"
]
