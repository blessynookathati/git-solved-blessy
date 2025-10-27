# My Git Mastery Challenge Journey

## ## Student Information
- Name: Blessy
- Student ID: 23a91a05h5
- Repository: https://github.com/blessynookathati/git-solved-blessy
- Date Started: October 27, 2025
- Date Completed: October 27, 2025

## Task Summary
Cloned instructor's repository with pre-built merge conflicts across multiple branches and resolved all conflicts to create a clean, working production code base. Mastered advanced Git workflows, including rebase, cherry-pick, stash, reset, and revert.

## Commands Used

| Command | Times Used | Purpose |
| :--- | :--- | :--- |
| `git clone` | 1 | Clone instructor's repository |
| `git checkout` | 20+ | Switch between branches |
| `git branch` | 10+ | View and manage branches |
| `git merge` | 2 | Merge `dev` and `conflict-simulator` into `main` |
| `git add` | 30+ | Stage resolved conflicts and changes |
| `git commit` | 15+ | Commit resolved changes and features |
| `git push` | 10+ | Push to my repository |
| `git fetch` | 2 | Fetch updates from instructor's remote |
| `git pull` | 1 | Pull updates |
| `git stash` | 2 | Save temporary work |
| `git cherry-pick` | 1 | Copy specific commit |
| `git rebase` | 1 | Rebase feature branch |
| `git reset` | 1 | Undo commits (soft) |
| `git revert` | 1 | Safe undo |
| `git tag` | 2 | Create release tags |
| `git status` | 50+ | Check repository status |
| `git log` | 30+ | View history |
| `git diff` | 20+ | Compare changes |

---

## Conflicts Resolved

### Merge 1: `main` + `dev` (6 Files)
*(Strategy: Maintain production as primary, integrate development features as optional)*

#### Conflict 1: `config/app-config.yaml`
- **Issue**: Production used port 8080; development used port 3000 and added hot-reload.
- **Resolution**: Created unified config with production settings as default.
- **Strategy**: Keep production as default, add development section as optional config.
- **Difficulty**: Medium
- **Time**: [TIME] minutes

#### Conflict 2: `config/database-config.json`
- **Issue**: Different database hosts and settings in each branch.
- **Resolution**: Created separate profile sections (`production` and `development`).
- **Strategy**: Restructured JSON to support environment-based configuration.
- **Difficulty**: Medium
- **Time**: [TIME] minutes

#### Conflict 3: `scripts/deploy.sh`
- **Issue**: Different deployment strategies and dependencies (npm install).
- **Resolution**: Made script conditional using an environment variable (`$DEPLOY_ENV`).
- **Strategy**: Added conditional logic to support both environments in one script.
- **Difficulty**: Hard
- **Time**: [TIME] minutes

#### Conflict 4: `scripts/monitor.js`
- **Issue**: Different monitoring intervals and logging levels.
- **Resolution**: Environment-based configuration object was added to control monitoring variables.
- **Strategy**: Used `process.env.NODE_ENV` to switch between production and development monitoring settings.
- **Difficulty**: Medium
- **Time**: [TIME] minutes

#### Conflict 5: `docs/architecture.md`
- **Issue**: Different architectural descriptions.
- **Resolution**: Merged both descriptions.
- **Strategy**: Created sections for each environment's specific components.
- **Difficulty**: Easy
- **Time**: [TIME] minutes

#### Conflict 6: `README.md`
- **Issue**: Different feature lists and version numbers.
- **Resolution**: Combined all features while maintaining the correct version number.
- **Strategy**: Organized features by category (Core, Production, Development).
- **Difficulty**: Easy
- **Time**: [TIME] minutes

### Merge 2: `main` + `conflict-simulator` (5 Files)
*(Strategy: Keep stable production code as primary; integrate experimental features as commented out or behind feature flags.)*

- Document the second set of conflicts similarly: **Issue, Resolution, Strategy, Difficulty, Time** for `config/app-config.yaml`, `config/database-config.json`, `docs/architecture.md`, `scripts/deploy.sh`, and `scripts/monitor.js`.

---

## Most Challenging Parts
1. **Understanding Conflict Markers**: Initially knowing which code block belonged to which branch was confusing.
2. **Deciding What to Keep**: The hardest part was determining the appropriate resolution strategy for logic-based conflicts (like `deploy.sh`).
3. **Complex Logic Conflicts**: Specifically resolving `scripts/deploy.sh` required creating new conditional logic.
4. **Testing After Resolution**: Making sure the code worked correctly after manual merging.

## Key Learnings
### Technical Skills
- Mastered conflict resolution process.
- Understood merge conflict markers.
- Learned to use `git diff` effectively.
- Practiced all major Git commands.

### Best Practices
- Always read both sides of conflict before attempting resolution.
- Test resolved code before committing.
- Write detailed merge commit messages.
- Use `git status` frequently.
- Commit atomically (small, logical changes).

## Reflection
This challenge taught me that merge conflicts are normal, not errors—just Git asking "which version do you want". The hands-on practice with all Git commands (`cherry-pick`, `rebase`, `reset`, `revert`, `stash`) was invaluable for understanding when and how to use each. It built confidence for handling conflicts in real projects.