This is a brief guide on how to use git.

Git add allows us to stage changes so they are ready to commit. Examples git add {filename.txt} git add . The first example allows us to stage one file, while the final one allows us to stage all files within a folder Potential flags: git add -A Stage all changes, including deletions git add -p Interactively stage changes by hunk (great for precise commits)

Git push sends your local commits to github so you or others can see them. Examples git push origin main This example is telling git to push our main which we are working on to our repository Potential flags: | git push -u origin main Push and set upstream (for future pushes) git push --force-with-lease Force push safely, only if no one else pushed

Git commit creates a snapshot of the changes you have made and allows you to add a message onto the changes to descirbe what has been done Examples git commit -m "Added this readme to my first repository" This is an example of adding the message to my commit of this read me! Potential flags: git commit -m "message" Commit with a message git commit --amend -m "new message" Modify the last commit message or include new staged changes git commit --allow-empty -m "message"

We can also change the origin url using git remote Example git remote set-url origin (new url) This allows us to change where our git commits go in the case of changing our repository name

git stash can be used to save changes we are making that we are not ready quite yet to commit Example git stash push -m "Work in progress changes" This is a git push to save work and a message without commiting the changes Potential Flags git stash list List all stashed changes git stash apply stash@{0} Apply stash without removing it git stash pop Apply and remove the latest stash git stash branch Create a new branch from stash and apply it

git revert allows us to revert to a previous commit without changing the history Example git revert (commit-hash) By inserting a commit hash from previos committs we are able to move back to that last commit Potential Flags: git revert --no-edit Revert without editing commit message git revert -n Revert but do not auto-commit (stage changes instead)

git reset allows us to undo committed changes/stages Example git reset --soft This allows us to undo our last commit whit still keeping the changes staged Potential Flags: git reset HEAD1 Undo last commit, unstage changes but keep them in working directory git reset --hard HEAD1 Undo last commit and discard changes (dangerous for shared repos)
