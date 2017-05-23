using BiztechDashboard.Models;
using System;
using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Web;

namespace BiztechDashboard.Controllers
{
    public class ACLQuery
    {
        static PrincipalContext context;

        //this method is used to connect to server domain
        public void GetConnectToDomain(string myDomain)
        {
            try
            {
                if (myDomain == "")
                    context = new PrincipalContext(ContextType.Domain);
                else
                    context = new PrincipalContext(ContextType.Domain, myDomain);

                Console.WriteLine("Successfully Connected to : " + context.ConnectedServer);
            }
            catch
            {
                Console.WriteLine("Domain Name Unreachable.\n");
            }
        }

        //this method is used to getUsers filtered by searchString
        public string getUsers(string searchString)
        {
            if (context == null)
            {
                //Console.WriteLine("Domain Name is invalid or not supplied. Trying to Connect to its default Domain...");
                GetConnectToDomain("");
            }

            List<UserPrincipal> searchPrinciples = new List<UserPrincipal>(); // this is used for filtering of users
            List<Principal> results = new List<Principal>(); // this fetch all user details from [searchPrinciples]

            //this is the filter conditions 
            searchPrinciples.Add(new UserPrincipal(context) { SamAccountName = searchString + "*" });

            var searcher = new PrincipalSearcher();

            //this loop gets the result according to its filter conditions
            foreach (var item in searchPrinciples)
            {
                searcher = new PrincipalSearcher(item);
                results.AddRange(searcher.FindAll());
            }
            //fills [results]'s values to list of [entity]
            if (results.Count > 0)
                return results[0].DisplayName;

            return "";
        }
    }
}