# Loading environment variables

We use [`direnv`][direnv] to load environment variables, as it ensures you only have project-specific variables loaded
_when you are inside the project_, otherwise these variables are not loaded. This can prevent accidental conflicts
with identically named variables.

```{contents}
:local:
:depth: 2
```

## Using `direnv`

To load the environment variables, first [install `direnv`](#installing-direnv), and make sure you have a `.secrets`
file to [store secrets and credentials](#storing-secrets-and-credentials). Then:

1. Open your terminal;
2. Navigate to the project folder; and
   - You should see the following message:
     ```shell
     direnv: error .envrc is blocked. Run `direnv allow` to approve its content.
     ```
3. Allow `direnv`.
   ```shell
   direnv allow
   ```

You only need to do this **once**, and again each time `.envrc` and `.secrets` are modified.

### Installing `direnv`

These instructions assume you are running on macOS with administrator privileges using a bash terminal. For other ways
of installing `direnv`, and its shell hooks, consult the package's [documentation][direnv].

1. Open your terminal;
2. Install `direnv` via [Homebrew][homebrew];
   ```shell
   brew install direnv
   ```
3. Add the shell hooks to your `.bash_profile`;
   ```shell
   echo 'eval "$(direnv hook bash)"' >> ~/.bash_profile
   ```
4. Check that the shell hooks have been added correctly; and
   ```shell
   cat ~/.bash_profile
   ```
   - This should display `eval "$(direnv hook bash)"`
5. Restart your terminal.

## Storing secrets and credentials

Secrets and credentials must be stored in the `.secrets` file. **This file is not version-controlled**, so no secrets
should be committed to GitHub.

In your terminal navigate to the root folder, and create a `.secrets` file.

```shell
touch .secrets
```

Open this new `.secrets` file using your preferred text editor, and add any secrets as environmental variables. For
example, to add a JSON credentials file for Google BigQuery, save the following changes to `.secrets`.

```shell
export GOOGLE_APPLICATION_CREDENTIALS="path/to/credentials.json"
```

Once complete, make sure the `.secrets` file has the following line uncommented out:

```shell
source_env ".secrets"
```

This ensures [`direnv`][direnv] loads the `.secrets` file via `.envrc` **without** version-controlling `.secrets`.

[direnv]: https://direnv.net/
[homebrew]: https://brew.sh/
