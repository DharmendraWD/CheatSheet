### Git 
* **Set git in your machine**
``` git config --global user.name "DharmendraWD"```
```  git config --global user.email "zaynhere@icloud.com"```




1. Initialize git ```git add``` 
2. Add all files in git ```git add .``` 
3. Check Status ```git status -s ``` 
4. Create a Branch and Switch on it ```git switch -C NewBranchName ``` 
5. Switch Branch ```git switch BranchName ``` 
6. Delete Branch ```git -d branchName ``` 
7. History ```git log --oneline ``` 
8. Make Alias Origin ```git remote add origin LINK ``` 
9. Push ```git push -u origin branchName ``` 
10. Delete file ``` git rm --FILE_NAME``` 
11. Change Origin URL ``` git remote set-url origin URL``` 
12. To get previous code using commit-hash ```git checkout commit-hash``` 

---
8. Save changes in draft/stash ```git stash ``` 
9. Apply draft/stash code ```git stash apply ``` 
10. delete draft/stash code ```git stash clear ``` 



   ---------
   ---------
   ---------
**Q. WORK AS A COLLABORATOR??**
1. clone the reppo from invitation link. (any reppo on which u want to work)
2. make a new Branch and work on it. (do not work on main branch)
3. git add . 
4. do commit
5. do push (git push -u origin NotMainBranch)

**Q. WHAT AFTER PUSHING CODE?**
1. after pushing the code you need to inform the owner.
2. then owner fetches the code (git fetch)  on his local system.
3. and if everything goes well then the owner merge the code with main and push it. 

**Q. OKAY, collaborator wrote code and got pushed on main branch. Now, what will collaborator do?**
1. collaborator needs to pull the code on his system after the code get approved by owner.
2. it can be done by (git pull) --> it will pull everything which was pushed earlier by owner.



