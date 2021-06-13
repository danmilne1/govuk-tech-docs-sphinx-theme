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
    "sphinx.ext.githubpages",
    "sphinx.ext.mathjax",
    "sphinx.ext.napoleon",
    "myst_parser",
    "govuk_tech_docs_sphinx_theme"
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# The suffix(es) of source filenames.  You can specify multiple suffix as a list of string:
source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

# The master toctree document.
master_doc = "index"

# General information about the project.
project = "GOV.UK Tech Docs Sphinx Theme"
author = "Government Digital Service"

# List of patterns, relative to source directory, that match files and directories to ignore when looking for source
# files. These patterns also affect html_static_path and html_extra_path
exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "README.md"]

# -- Options for govuk-tech-docs-sphinx-theme --------------------------------------------------------------------------

# Get the latest Git commit hash — this is used to redirect the 'View Source' link correctly. If this fails, default to
# `main`. Based on code snippet from:
# https://github.com/sphinx-doc/sphinx/blob/1ebc9c26c7a4c484733beb9f8e39e93846d86494/sphinx/__init__.py#L53
try:
    p = subprocess.run(["git", "show", "-s", "--pretty=format:%H"], stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                       encoding="ascii")
    git_version = p.stdout if p.stdout else "main"
except Exception:
    git_version = "main"

# -- Options for HTML output -------------------------------------------------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for a list of builtin themes.
html_theme = "govuk_tech_docs_sphinx_theme"

# Variables to pass to each HTML page to help populate page-specific options
html_context = {
    "github_url": "https://www.github.com/ukgovdatascience/govuk-tech-docs-sphinx-theme",
    "gitlab_url": None,
    "conf_py_path": "docs/",
    "version": git_version,
    "accessibility": "accessibility.md"
}

# Theme options are theme-specific and customize the look and feel of a theme further.  For a list of options available
# for each theme, see the documentation.
html_theme_options = {
    "organisation": "GDS",
    "phase": "Discovery"
}

# Add any paths that contain custom static files (such as style sheets) here, relative to this directory. They are
# copied after the builtin static files, so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]

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
